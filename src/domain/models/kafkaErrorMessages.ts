import { EKafkaErrorCodes } from "../enums";

export const KafkaErrorMessages: Record<EKafkaErrorCodes, string> = {
  [EKafkaErrorCodes.NoError]: 'No error occurred.',
  [EKafkaErrorCodes.Unknown]: 'An unknown error occurred.',
  [EKafkaErrorCodes.OffsetOutOfRange]: 'The requested offset is out of range.',
  [EKafkaErrorCodes.CorruptMessage]: 'The message is corrupt.',
  [EKafkaErrorCodes.UnknownTopicOrPartition]: 'Unknown topic or partition.',
  [EKafkaErrorCodes.InvalidFetchSize]: 'Invalid fetch size requested.',
  [EKafkaErrorCodes.LeaderNotAvailable]: 'Leader not available for the partition.',
  [EKafkaErrorCodes.NotLeaderForPartition]: 'Broker is not the leader for the partition.',
  [EKafkaErrorCodes.RequestTimedOut]: 'Request timed out.',
  [EKafkaErrorCodes.BrokerNotAvailable]: 'Broker is not available.',
  [EKafkaErrorCodes.ReplicaNotAvailable]: 'Replica is not available for the partition.',
  [EKafkaErrorCodes.MessageTooLarge]: 'The message is too large.',
  [EKafkaErrorCodes.StaleControllerEpochCode]: 'Stale controller epoch code.',
  [EKafkaErrorCodes.OffsetMetadataTooLarge]: 'Offset metadata is too large.',
  [EKafkaErrorCodes.NetworkException]: 'Network exception occurred.',
  [EKafkaErrorCodes.CoordinatorLoadInProgress]: 'Coordinator load in progress.',
  [EKafkaErrorCodes.CoordinatorNotAvailable]: 'Coordinator is not available.',
  [EKafkaErrorCodes.NotCoordinator]: 'Broker is not the coordinator for the group.'
}