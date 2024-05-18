window.pf.ui.hi = () => {
  console.log("UI 1NJ3K7ED");
}

window.toggleForgeUI = () => {
  let uiDiv = document.getElementById('forgeConfig')
  uiDiv.style.display = uiDiv.style.display === 'none' ? 'block' : 'none';
}

const init = async () => {
  const _uidiv = await ShowUI();
  document.body.appendChild(_uidiv);

  let uiDiv = document.getElementById('forgeConfig')
  console.log("ovovoov", uiDiv)
  uiDiv.style.position = 'fixed';
  uiDiv.style.top = 0;
  uiDiv.style.left = 0;
  uiDiv.style.zIndex = 1000; 
  document.body.appendChild(uiDiv);

  var longRangeCheckbox = document.getElementById('longRange');
  var easyTeleportCheckbox = document.getElementById('easyTeleport');
  var noCollisionCheckbox = document.getElementById('noCollision');
  var speedHackCheckbox = document.getElementById('speedHack');
  var autoChopTreesCheckbox = document.getElementById('autoChopTrees');

  window.forgeLongRange = longRangeCheckbox.checked;
  window.forgeEasyTeleport = easyTeleportCheckbox.checked;
  window.forgeNoCollision = noCollisionCheckbox.checked;
  window.forgeSpeedHack = speedHackCheckbox.checked;
  //window.forgeAutoChopTrees = autoChopTreesCheckbox.checked;

  longRangeCheckbox.onclick = function() {
    window.forgeLongRange = this.checked;
  };
  
  easyTeleportCheckbox.onclick = function() {
    window.forgeEasyTeleport = this.checked;
  };
  
  noCollisionCheckbox.onclick = function() {
    window.forgeNoCollision = this.checked;
  };
  
  speedHackCheckbox.onclick = function() {
    window.forgeSpeedHack = this.checked;
  };
  
  /*
  autoChopTreesCheckbox.onclick = function() {
    window.forgeAutoChopTrees = this.checked;
  };*/

}



const ShowUI = async () => {

  let div = document.createElement('div');

  div.innerHTML = /*html*/`
    <div id="forgeConfig" style="background: rgba(255, 255, 255, 0.7);">
      <h1>Configuration</h1>

      <div>
        <input type="checkbox" id="longRange">
        <label for="config1">Long range click</label><br>
        
        <input type="checkbox" id="easyTeleport">
        <label for="config2">Easy teleport</label><br>
        
        <br>
        <br>
        <p style="font-size: 12px">The next options needs to be enabled before starting the game:</p>
        <input type="checkbox" id="noCollision">
        <label for="config3">No collisions <span style="font-size: 8px">(game reload required)</span></label><br>
        
        <input type="checkbox" id="speedHack">
        <label for="config4">Speed Hack <span style="font-size: 8px">(game reload required)</span></label><br>
        <!--
        <div>
          <input type="checkbox" id="autoChopTrees">
          <label for="config5">Auto chop trees</label><br>
        </div>
        -->
        
      </div>
        
    </div>
        
    `
    return div;

}

init()
