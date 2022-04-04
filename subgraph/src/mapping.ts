import { BigInt } from "@graphprotocol/graph-ts"
import {
  AssetDemo,
  AssetCheckFailed,
  AssetCreationEvent,
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  OwnerTransformEvent
} from "../generated/AssetDemo/AssetDemo"
import { ExampleEntity, AssetEntity } from "../generated/schema"

export function handleAssetCheckFailed(event: AssetCheckFailed): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._contract = event.params._contract
  entity._buyer = event.params._buyer

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.assetType(...)
  // - contract.createRequestTo(...)
  // - contract.data(...)
  // - contract.did(...)
  // - contract.getChainlinkToken(...)
  // - contract.imgUrl(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.price(...)
}

export function handleAssetCreationEvent(event: AssetCreationEvent): void {
  let entity = AssetEntity.load(event.params.addr.toHexString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new AssetEntity(event.params.addr.toHexString())
  }
  // _name, _imgUrl, _did, _owner, price, stage
  // BigInt and BigDecimal math are supported
  entity.did = event.params.did
  entity.addr = event.params.addr.toHexString()
  entity.name = event.params.name
  entity.url = event.params.url
  entity.owner = event.params.owner.toHexString()
  entity.ipfs = event.params.ipfs
  entity.save()
}

export function handleChainlinkCancelled(event: ChainlinkCancelled): void { }

export function handleChainlinkFulfilled(event: ChainlinkFulfilled): void { }

export function handleChainlinkRequested(event: ChainlinkRequested): void { }

export function handleOwnerTransformEvent(event: OwnerTransformEvent): void {
  let entity = AssetEntity.load(event.params._contract.toHexString())
  if (!entity) {
    return
  }
  entity.owner = event.params._to.toHexString()
  entity.save()
}
