import Blackprint from "@blackprint/engine";

// This is required for accessing data between .ts and .sf module
export let Context = Blackprint.createContext("LibraryName");

// This is needed to avoid duplicated event listener when using hot reload
// Event listener that registered with same slot will be replaced
Context.EventSlot = {slot: 'my-private-event-slot'};