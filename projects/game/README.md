# Chris Needs Coffee

## Setting

This game's objective is to go into the neighbors house and steal their toaster. Their toaster is hidden somewhere in their house! Go find it without getting caught.

## Map

```mermaid
graph TD;
    Your house(((Your house)))-->Outside;
    Outside-->Your neighbors house;
    Outside-->The Park;
    The park-->Public bathroom;
    Your neighbors house-->Kitchen;
    Your neighbors house-->Upstairs;
    Your neighbors house-->Living room;
    Your neighbors house-->Bathroom;
    Outside-->Your neighbors backyard;
    Upstairs-->Bedroom;
    Bedroom-->Closet;
    Bedroom-->Hide under bed
```

The player starts in their house, and then is directed outside.
They will eventually go to their neighbors house to steal their toaster, because the player's toaster exploded.

## Story

In the story, the player's toaster explodes and they need a new one. They remember that the neighbor has a high tech fancy toaster, so they decide to steal it. As they explore, they will have to hide from the neighbor.

## Global Variables

The most important variables are 'hidAlready' and 'wentThere'.
Hid already tracks if they had already hid under the bed to let the neighbor not check there anymore. wentThere tracks if the player already went there, so the neighbor wont be there anymore. If they go to a room for the first time, the story will say that the neighbor is coming, and you quickly hide. If you already went there, it will say that the neighbor is gone. You also have to get a key to open a safe in the closet, which is in the kitchen. 'haveKey' which unlocks the safe. 

