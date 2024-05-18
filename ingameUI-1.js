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
    <div id="forgeConfig" style="background: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 16px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #333; font-size: 24px; margin-bottom: 16px;">Configuration</h1>

      <div style="margin-bottom: 16px;">
        <input type="checkbox" id="longRange" style="margin-right: 8px;">
        <label for="longRange" style="color: #333; font-size: 16px;">Long range click</label><br>
        
        <input type="checkbox" id="easyTeleport" style="margin-right: 8px;">
        <label for="easyTeleport" style="color: #333; font-size: 16px;">Easy teleport</label><br>
        
        <br>
        <p style="font-size: 14px; color: #666;">Enable the following options before starting the game:</p>
        <input type="checkbox" id="noCollision" style="margin-right: 8px;">
        <label for="noCollision" style="color: #333; font-size: 16px;">No collisions <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br>
        
        <input type="checkbox" id="speedHack" style="margin-right: 8px;">
        <label for="speedHack" style="color: #333; font-size: 16px;">Speed Hack <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br>

        
      </div>
        
    </div>
        
    `
    return div;

}

init()
