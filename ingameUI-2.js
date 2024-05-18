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

  let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/mikeeeyy04/pixcdn@main/styles.css';
    document.head.appendChild(link);

  div.innerHTML = /*html*/`
  <div class="pfbtn">
  <button class="Btn" onclick="toggleForgeConfig()" id="showBtn">        
      <img src="pficon-nobg.png" alt="Pixels Forge" width="90%">
      <span class="tooltip">Pixels Forge</span>
   </button>
  </div>

  <div class="forgeConfig" id="forgeConfig">
      <div class="drag" id="dragBtn">
      <button class="drag-button"><img src="drag.png" alt="Drag" ></button>
      </div>
      <div class="logo">
      <img src="pficon-nobg.png" alt="Pixels Forge">
      <h1 class="pftitle">Pixels Forge</h1>
      </div>
      <hr width="70%" style="margin-top: 20px;">
      <!-- <h1 style=" font-size: 24px; margin-bottom: 16px;">Configuration</h1> -->

      <div style="margin-bottom: 26px;">
        <!-- <input type="checkbox" id="longRange" style="margin-right: 8px;">
        <label for="longRange" style=" font-size: 16px;">Long range click</label><br>
        
        <input type="checkbox" id="easyTeleport" style="margin-right: 8px;">
        <label for="easyTeleport" style=" font-size: 16px;">Easy teleport</label><br>
        
        <br>
        <p style="font-size: 14px; color: #666;">Enable the following options before starting the game:</p>
        <input type="checkbox" id="noCollision" style="margin-right: 8px;">
        <label for="noCollision" style=" font-size: 16px;">No collisions <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br>
        
        <input type="checkbox" id="speedHack" style="margin-right: 8px;">
        <label for="speedHack" style="font-size: 16px;">Speed Hack <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br> -->

        <fieldset class="checkbox-group">
          <legend class="checkbox-group-legend">Configurations</legend>
          <div class="checkbox">
              <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" id="longRange" />
                  <span class="checkbox-tile">
                      <span class="checkbox-icon">
                          <img src="tree.png">
                      </span>
                      <span class="checkbox-label">Long Range</span>
                  </span>
              </label>
          </div>
          <div class="checkbox">
              <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" id="easyTeleport"/>
                  <span class="checkbox-tile">
                      <span class="checkbox-icon">
                          <img src="infiniportal.png">
                      </span>
                      <span class="checkbox-label" style="margin-top: 10px;">Easy Teleport</span>
                  </span>
              </label>
          </div>
          <div class="checkbox">
              <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" id="speedHack"/>
                  <span class="checkbox-tile">
                      <span class="checkbox-icon">
                          <img src="speed.png" style="background-color: transparent;">
                      </span>
                      <span class="checkbox-label">Speed Hack</span>
                      <span class="checkbox-note">Reload Required</span>
                  </span>
              </label>
          </div>
          <div class="checkbox">
              <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" id="noCollision" checked/>
                  <span class="checkbox-tile">
                      <span class="checkbox-icon">
                          <img src="nocollision.png">
                      </span>
                      <span class="checkbox-label">No Collision</span>
                      <span class="checkbox-note">Reload Required</span>
                  </span>
              </label>
          </div>

      </fieldset>
        
      <div class="footer">
          <hr width="70%">
          <p class="pftitle">Thank you for using</br> Pixels Forge <3</p>
          </a>
      </div>

      </div>


      <script>
          function toggleForgeConfig() {
              var configDiv = document.getElementById("forgeConfig");
              if (configDiv.style.display === "none" || configDiv.style.display === "") {
                  configDiv.style.display = "block";
              } else {
                  configDiv.style.display = "none";
              }
          }
  
  
          dragElement(document.getElementById("forgeConfig"));
          dragElement(document.getElementById("showBtn"));
  
          function dragElement(elmnt) {
              var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
              var dragBtn = elmnt.querySelector('.drag-button');
  
              dragBtn.addEventListener('mousedown', dragMouseDown);
  
              function dragMouseDown(e) {
                  if (e.target === dragBtn || e.target === elmnt) {
                      e.preventDefault();
                      pos3 = e.clientX;
                      pos4 = e.clientY;
                      document.body.style.cursor = "grabbing";
                      document.addEventListener('mouseup', closeDragElement);
                      document.addEventListener('mousemove', elementDrag);
                  }
              }
  
              function elementDrag(e) {
                  e.preventDefault();
                  pos1 = pos3 - e.clientX;
                  pos2 = pos4 - e.clientY;
                  pos3 = e.clientX;
                  pos4 = e.clientY;
                  var newX = elmnt.offsetLeft - pos1;
                  var newY = elmnt.offsetTop - pos2;
                  if (newX >= 0 && newY >= 0 && newX + elmnt.offsetWidth <= window.innerWidth && newY + elmnt.offsetHeight <= window.innerHeight) {
                      elmnt.style.top = newY + "px";
                      elmnt.style.left = newX + "px";
                  }
              }
  
              function closeDragElement() {
                  document.body.style.cursor = "auto";
                  document.removeEventListener('mouseup', closeDragElement);
                  document.removeEventListener('mousemove', elementDrag);
              }
          }
  
  
  
      </script>
        
    `
    return div;

}

init()
