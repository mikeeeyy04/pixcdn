let eventManager = null
let lastChopTimestamp = Date.now()

// ================================= LOCAL FUNCTIONS =================================
const handleWindmill = (entity) => {
}
const handleTree = (entity) => {
    entity = JSON.parse(JSON.stringify(entity))
    // auto last chop
    if (!window.forgeAutoChopTrees) return
    if ((Date.now() - lastChopTimestamp) < 10) return // avoid spamming and getting banned
    lastChopTimestamp = Date.now()

    let statics = entity.generic.statics
    if (statics[0].value > 0 && statics[0].value <= 3) {

        console.log("Chopping tree", entity)

        data = {
            client: {
                cropState: undefined,
                entityType: "generic",
                key: entity.entity,
            },
            item: {
                id: "itm_axe",
                inventorySlot: 3
            },
            target: {
                id: entity.mid,
                mid: entity.mid,
                type: "entity"
            }
        }
        eventManager.emitEventNow("PLAYER_USED_ITEM", data)
    }

    console.log("Not chopping tree")

}

const craftItem = (event, data) => {
    eventManager.emitEventNow(event, data)
}

const useItem = (data) => {
    eventManager.emitEventNow("ui", data)
}





// ================================= GLOBAL FUNCTIONS =================================

window.pf.hi = () => {
    console.warn("P1X3LF0RG3 1NJ3K7ED");
}


window.pf.setEventManager = (em) => {
    eventManager = em
    console.log("Event manager just registered!", em)
}


window.pf.onEntityUpdated = (entity) => {
    // called when an entity is updated
    // for ex when a windmill time reach to 0 or a tree is chopped
    //console.log("pf.onEntityUpdated", entity)

    if (entity.entity === "ent_windmill") {
        handleWindmill(entity)
    }
    else if (entity.entity.includes("ent_tree")) {
        handleTree(entity)
    }
}

window.pf.onStateChange = (state) => {
    // called when the status of the game changes
    // for example, when an user moves or you used an item or a tree is chopped
    //console.log("pf.onStateChange", state)
    let currState = JSON.parse(JSON.stringify(state.entities))

}

window.pf.handleRoomUpdates = (state) => {
    // runs everytime the player moves to a new room
    // for ex, moving to terravilla or to a land
    console.log("pf.handleRoomUpdates: ", state)

    let currState = JSON.parse(JSON.stringify(state.entities))

}

window.pf.onEmitEventNow = (event, data) => {
    // called when an event is emitted ingame
    // if someone uses an item, this function will be called
    // if someone moves, this function will be called
    // if you press click, this function will be called
    console.log("pf.onEmitEventNow", event, data)
}

window.pf.onSendEventDelayed = (event, data) => {
    // called when an event is emitted ingame
    // you can modify normal behaviour of the game here
    // for ex if you use an item ingame, you can change the item used for another
    // or just use this function to check what data the game sends to emitEventNow
    // and use eventManager.emitEventNow to create your own events
    // you are not supposed to send events here, 
    // for sending events use eventManager.emitEventNow when window.pf.onStateChange or window.pf.onEntityUpdated is called

    console.log("pf.sendEventDelayed", event, data)
}