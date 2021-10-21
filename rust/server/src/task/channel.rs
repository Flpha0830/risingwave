use crate::array::DataChunk;
use crate::error::Result;
use crate::task::broadcast_channel::new_broadcast_channel;
use crate::task::fifo_channel::new_fifo_channel;
use crate::task::hash_shuffle_channel::new_hash_shuffle_channel;
use risingwave_proto::plan::{ShuffleInfo, ShuffleInfo_PartitionMode as ShufflePartitionMode};
use std::option::Option;

#[async_trait::async_trait]
pub trait ChanSender: Send {
    // `send` will block until there's enough resource to process the chunk.
    // Currently, `send` will only be called from single thread.
    async fn send(&mut self, chunk: DataChunk) -> Result<()>;
}

#[async_trait::async_trait]
pub trait ChanReceiver: Send {
    // Returns `None` if there's no more data to read.
    // Otherwise it will wait until there's data.
    async fn recv(&mut self) -> Option<DataChunk>;
}

pub type BoxChanSender = Box<dyn ChanSender>;
pub type BoxChanReceiver = Box<dyn ChanReceiver>;

// Output-channel is a synchronous, bounded single-producer-multiple-consumer queue.
// The producer is the local task executor, the consumer is ExchangeService.
// The implementation depends on the shuffling strategy.
pub fn create_output_channel(
    shuffle: &ShuffleInfo,
) -> Result<(BoxChanSender, Vec<BoxChanReceiver>)> {
    match shuffle.get_partition_mode() {
        ShufflePartitionMode::SINGLE => Ok(new_fifo_channel()),
        ShufflePartitionMode::HASH => Ok(new_hash_shuffle_channel(shuffle)),
        ShufflePartitionMode::BROADCAST => Ok(new_broadcast_channel(shuffle)),
    }
}
