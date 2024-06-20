import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
let chest = [
  {
    ID: 1,
    Name: "Leather Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour1.png"
  },
  {
    ID: 2,
    Name: "Chain Shirt",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour2.png"
  },
  {
    ID: 3,
    Name: "Studded Leather Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour3.png"
  },
  {
    ID: 4,
    Name: "Padded Armour",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/armour4.png"
  },
  {
    ID: 5,
    Name: "Hide Armour",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour5.png"
  },
  {
    ID: 6,
    Name: "Chainmail",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour6.png"
  },
  {
    ID: 7,
    Name: "Scale Mail",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour7.png"
  },
  {
    ID: 8,
    Name: "Breastplate",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/armour8.png"
  }
];
let helmet = [
  {
    ID: 1,
    Name: "Leather Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet1.png"
  },
  {
    ID: 2,
    Name: "Chain Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet2.png"
  },
  {
    ID: 3,
    Name: "Studded Leather Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet3.png"
  },
  {
    ID: 4,
    Name: "Padded Helmet",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/helmet4.png"
  },
  {
    ID: 5,
    Name: "Hide Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet5.png"
  },
  {
    ID: 6,
    Name: "Chainmail Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet6.png"
  },
  {
    ID: 7,
    Name: "Scale Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet7.png"
  },
  {
    ID: 8,
    Name: "Breastplate Helmet",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/helmet8.png"
  }
];
let boots = [
  {
    ID: 1,
    Name: "Leather Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots1.png"
  },
  {
    ID: 2,
    Name: "Chain Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots2.png"
  },
  {
    ID: 3,
    Name: "Studded Leather Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots3.png"
  },
  {
    ID: 4,
    Name: "Padded Boots",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/boots4.png"
  },
  {
    ID: 5,
    Name: "Hide Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots5.png"
  },
  {
    ID: 6,
    Name: "Chainmail Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots6.png"
  },
  {
    ID: 7,
    Name: "Scale Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots7.png"
  },
  {
    ID: 8,
    Name: "Breastplate Boots",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/boots8.png"
  }
];
let gloves = [
  {
    ID: 1,
    Name: "Leather Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves1.png"
  },
  {
    ID: 2,
    Name: "Chain Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 50,
    AC: 13,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves2.png"
  },
  {
    ID: 3,
    Name: "Studded Leather Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 45,
    AC: 12,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves3.png"
  },
  {
    ID: 4,
    Name: "Padded Gloves",
    ArmourType: "Light",
    Effect1: "+1 AC",
    Effect2: "+1 DEX",
    Value: 5,
    AC: 11,
    Proficiency: "Light Armour",
    Image: "/ArmourImages/gloves4.png"
  },
  {
    ID: 5,
    Name: "Hide Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 10,
    AC: 12,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves5.png"
  },
  {
    ID: 6,
    Name: "Chainmail Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 75,
    AC: 16,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves6.png"
  },
  {
    ID: 7,
    Name: "Scale Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "None",
    Value: 50,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves7.png"
  },
  {
    ID: 8,
    Name: "Breastplate Gloves",
    ArmourType: "Medium",
    Effect1: "+2 AC",
    Effect2: "+1 DEX",
    Value: 400,
    AC: 14,
    Proficiency: "Medium Armour",
    Image: "/ArmourImages/gloves8.png"
  }
];
const css$4 = {
  code: ':root{--primary-color:#066e79;--secondary-color:#edd8a0;--error-code:#ff0000;--race-image-height:700px;--race-image-width:400px;--select-element-width:(var(--race-image-width) - 50px);--select-element-height:(var(var(--race-image-height)) - 100px);--select-element-font-size:20px;--select-font-weight:bolder;--background-image-url:url("src/lib/logo/Site-Background.png")}.svelte-12sgffh.svelte-12sgffh{margin:0;padding:0;box-sizing:border-box;background-color:var(--primary-color);color:var(--secondary-color);font-family:"Oswald"}select.svelte-12sgffh.svelte-12sgffh{font-size:16px;margin-bottom:20px}.armour.svelte-12sgffh.svelte-12sgffh{display:flex;flex-direction:row;align-items:center;justify-content:center}#ArmourDisplay.svelte-12sgffh.svelte-12sgffh{display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px solid var(--secondary-color);padding:10px}#ArmourDisplay.svelte-12sgffh img.svelte-12sgffh{width:125px;height:125px;margin:auto}#ArmourPicker.svelte-12sgffh.svelte-12sgffh{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px}#ArmourPicker.svelte-12sgffh select.svelte-12sgffh{font-size:20px;font-weight:bolder;margin-bottom:70px;width:300px;height:60px;border:1px solid var(--secondary-color)}#ArmourMain.svelte-12sgffh.svelte-12sgffh{margin-left:-240px}#ArmourPicker.svelte-12sgffh select option.svelte-12sgffh{font-size:20px;font-weight:bolder;margin-bottom:20px;height:60px;width:100px;background-color:var(--primary-color);color:var(--secondary-color);text-align:top}',
  map: '{"version":3,"file":"ArmourSelect.svelte","sources":["ArmourSelect.svelte"],"sourcesContent":["<script>\\r\\n  import { chest, helmet, boots, gloves } from \\"../lib/gameItems.mjs\\";\\r\\n\\r\\n  let selectedHelmet = \\"6567567567556756756756765765757756756765756756767\\"; // Default selected helmet ID\\r\\n  let selectChest = \\"\\"; // Default selected chest ID\\r\\n  let selectBoots = \\"\\"; // Default selected boots ID\\r\\n  let selectGloves = \\"\\"; // Default selected gloves ID\\r\\n  let chestDisplay = {}; // Object to store the selected chest item\\r\\n  let helmetDisplay = {}; // Object to store the selected helmet item\\r\\n  let bootsDisplay = {}; // Object to store the selected boots item\\r\\n  let glovesDisplay = {}; // Object to store the selected gloves item\\r\\n\\r\\n  function selectedHelm(event) {\\r\\n    selectedHelmet = event.target.value;\\r\\n    console.log(selectedHelmet);\\r\\n    helmetDisplay = helmet.find((item) => item.Name === selectedHelmet);\\r\\n    console.log(helmetDisplay?.Image);\\r\\n  }\\r\\n\\r\\n  function selectedChest(event) {\\r\\n    selectChest = event.target.value;\\r\\n    console.log(selectChest);\\r\\n    chestDisplay = chest.find((item) => item.Name === selectChest);\\r\\n    console.log(chestDisplay?.Image);\\r\\n  }\\r\\n\\r\\n  function selectedBoots(event) {\\r\\n    selectBoots = event.target.value;\\r\\n    console.log(selectBoots);\\r\\n    bootsDisplay = boots.find((item) => item.Name === selectBoots);\\r\\n    console.log(bootsDisplay?.Image);\\r\\n  }\\r\\n\\r\\n  function selectedGloves(event) {\\r\\n    selectGloves = event.target.value;\\r\\n    console.log(selectGloves);\\r\\n    glovesDisplay = gloves.find((item) => item.Name === selectGloves);\\r\\n    console.log(glovesDisplay?.Image);\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<main id=\\"ArmourMain\\">\\r\\n  <div class=\\"armour\\">\\r\\n    <section id=\\"ArmourDisplay\\">\\r\\n      <div id=\\"HelmetDisplay\\">\\r\\n        {#if helmetDisplay}\\r\\n          <img src={helmetDisplay.Image} alt={helmetDisplay.Name} />\\r\\n        {:else}\\r\\n          <p>No helmet selected</p>\\r\\n        {/if}\\r\\n      </div>\\r\\n      <div id=\\"ChestDisplay\\">\\r\\n        {#if chestDisplay}\\r\\n          <img src={chestDisplay.Image} alt={chestDisplay.Name} />\\r\\n        {:else}\\r\\n          <p>No chest selected</p>\\r\\n        {/if}\\r\\n      </div>\\r\\n      <div id=\\"GlovesDisplay\\">\\r\\n        {#if glovesDisplay}\\r\\n          <img src={glovesDisplay.Image} alt={glovesDisplay.Name} />\\r\\n        {:else}\\r\\n          <p>No gloves selected</p>\\r\\n        {/if}\\r\\n      </div>\\r\\n      <div id=\\"BootsDisplay\\">\\r\\n        {#if bootsDisplay}\\r\\n          <img src={bootsDisplay.Image} alt={bootsDisplay.Name} />\\r\\n        {:else}\\r\\n          <p>No boots selected</p>\\r\\n        {/if}\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section id=\\"ArmourPicker\\">\\r\\n      <select id=\\"Helm\\" bind:value={selectedHelmet} on:change={selectedHelm}>\\r\\n        {#each helmet as item}\\r\\n          <option value={item.Name}>{item.Name}</option>\\r\\n        {/each}\\r\\n      </select>\\r\\n      <select id=\\"Chest\\" bind:value={selectChest} on:change={selectedChest}>\\r\\n        {#each chest as item}\\r\\n          <option value={item.Name}>{item.Name}</option>\\r\\n        {/each}\\r\\n      </select>\\r\\n      <select id=\\"Hands\\" bind:value={selectGloves} on:change={selectedGloves}>\\r\\n        {#each gloves as item}\\r\\n          <option value={item.Name}>{item.Name}</option>\\r\\n        {/each}\\r\\n      </select>\\r\\n      <select id=\\"Boots\\" bind:value={selectBoots} on:change={selectedBoots}>\\r\\n        {#each boots as item}\\r\\n          <option value={item.Name}>{item.Name}</option>\\r\\n        {/each}\\r\\n      </select>\\r\\n    </section>\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  :root {\\r\\n  /* Site Variables */\\r\\n  --primary-color: #066e79;\\r\\n  --secondary-color: #edd8a0;\\r\\n  --error-code: #ff0000;\\r\\n\\r\\n  --race-image-height: 700px;\\r\\n  --race-image-width: 400px;\\r\\n  --select-element-width: (var(--race-image-width) - 50px);\\r\\n  --select-element-height: (var(var(--race-image-height)) - 100px);\\r\\n  --select-element-font-size: 20px;\\r\\n  --select-font-weight: bolder;\\r\\n\\r\\n  --background-image-url: url(\\"src/lib/logo/Site-Background.png\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* Global Styles */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  font-family: \\"Oswald\\";\\r\\n}\\r\\n\\r\\n.oswald-font {\\r\\n  /* Custom Site Font */\\r\\n  font-family: \\"Oswald\\", sans-serif;\\r\\n  font-optical-sizing: auto;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n  .armour {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#ArmourDisplay {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 2px solid var(--secondary-color);\\r\\n  padding: 10px;\\r\\n}\\r\\n#ArmourDisplay img {\\r\\n  width: 125px;\\r\\n  height: 125px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#ArmourPicker {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n#ArmourPicker select {\\r\\n  font-size: 20px;\\r\\n  font-weight: bolder;\\r\\n  margin-bottom: 70px;\\r\\n  width: 300px;\\r\\n  height: 60px;\\r\\n  border: 1px solid var(--secondary-color);\\r\\n}\\r\\n\\r\\n#ArmourMain {\\r\\n  margin-left: -240px;\\r\\n}\\r\\n\\r\\n#ArmourPicker select option {\\r\\n  font-size: 20px;\\r\\n  font-weight: bolder;\\r\\n  margin-bottom: 20px;\\r\\n  height: 60px;\\r\\n  width: 100px;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  text-align: top;\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AAqGE,KAAM,CAEN,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,OAAO,CAC1B,YAAY,CAAE,OAAO,CAErB,mBAAmB,CAAE,KAAK,CAC1B,kBAAkB,CAAE,KAAK,CACzB,sBAAsB,CAAE,gCAAgC,CACxD,uBAAuB,CAAE,uCAAuC,CAChE,0BAA0B,CAAE,IAAI,CAChC,oBAAoB,CAAE,MAAM,CAE5B,sBAAsB,CAAE,uCAC1B,CAEA,8BAAE,CAEA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,WAAW,CAAE,QACf,CAUA,oCAAO,CACL,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACE,qCAAQ,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CAAC,CACxC,OAAO,CAAE,IACX,CACA,6BAAc,CAAC,kBAAI,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IACV,CAEA,2CAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IACV,CAEA,4BAAa,CAAC,qBAAO,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CACzC,CAEA,yCAAY,CACV,WAAW,CAAE,MACf,CAEA,4BAAa,CAAC,MAAM,CAAC,qBAAO,CAC1B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,UAAU,CAAE,GACd"}'
};
const ArmourSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chestDisplay = {};
  let helmetDisplay = {};
  let bootsDisplay = {};
  let glovesDisplay = {};
  $$result.css.add(css$4);
  return `<main id="ArmourMain" class="svelte-12sgffh"><div class="armour svelte-12sgffh"><section id="ArmourDisplay" class="svelte-12sgffh"><div id="HelmetDisplay" class="svelte-12sgffh">${helmetDisplay ? `<img${add_attribute("src", helmetDisplay.Image, 0)}${add_attribute("alt", helmetDisplay.Name, 0)} class="svelte-12sgffh">` : `<p class="svelte-12sgffh" data-svelte-h="svelte-1t2emg3">No helmet selected</p>`}</div> <div id="ChestDisplay" class="svelte-12sgffh">${chestDisplay ? `<img${add_attribute("src", chestDisplay.Image, 0)}${add_attribute("alt", chestDisplay.Name, 0)} class="svelte-12sgffh">` : `<p class="svelte-12sgffh" data-svelte-h="svelte-emgelf">No chest selected</p>`}</div> <div id="GlovesDisplay" class="svelte-12sgffh">${glovesDisplay ? `<img${add_attribute("src", glovesDisplay.Image, 0)}${add_attribute("alt", glovesDisplay.Name, 0)} class="svelte-12sgffh">` : `<p class="svelte-12sgffh" data-svelte-h="svelte-1bj81c8">No gloves selected</p>`}</div> <div id="BootsDisplay" class="svelte-12sgffh">${bootsDisplay ? `<img${add_attribute("src", bootsDisplay.Image, 0)}${add_attribute("alt", bootsDisplay.Name, 0)} class="svelte-12sgffh">` : `<p class="svelte-12sgffh" data-svelte-h="svelte-1go6okn">No boots selected</p>`}</div></section> <section id="ArmourPicker" class="svelte-12sgffh"><select id="Helm" class="svelte-12sgffh">${each(helmet, (item) => {
    return `<option${add_attribute("value", item.Name, 0)} class="svelte-12sgffh">${escape(item.Name)}</option>`;
  })}</select> <select id="Chest" class="svelte-12sgffh">${each(chest, (item) => {
    return `<option${add_attribute("value", item.Name, 0)} class="svelte-12sgffh">${escape(item.Name)}</option>`;
  })}</select> <select id="Hands" class="svelte-12sgffh">${each(gloves, (item) => {
    return `<option${add_attribute("value", item.Name, 0)} class="svelte-12sgffh">${escape(item.Name)}</option>`;
  })}</select> <select id="Boots" class="svelte-12sgffh">${each(boots, (item) => {
    return `<option${add_attribute("value", item.Name, 0)} class="svelte-12sgffh">${escape(item.Name)}</option>`;
  })}</select></section></div> </main>`;
});
let characterStatistics = [
  {
    ID: 1,
    Name: "Strength",
    Value: 8,
    Modifier: 0,
    Bio: "Strength is an ability score and the primary ability of Barbarian, Fighter, Paladin.\n Strength affects your Athletics skill and attack rolls so you become better at melee combat. It also determines how far you can jump, how much you can carry, and how much damage you can carry and how far you can shove"
  },
  {
    ID: 2,
    Name: "Dexterity",
    Value: 8,
    Modifier: 0,
    Bio: "Dexterity is an ability score and a key ability of Rogues, Rangers, Monks, and other wielders of finesse weapons.\nDexterity affects your Acrobatics, Sleight of Hand, and Stealth skills, as well as your attack rolls for ranged weapons and finesse weapons. It also affects your Initiative and Armour Class."
  },
  {
    ID: 3,
    Name: "Constitution",
    Value: 8,
    Modifier: 0,
    Bio: "Constitution is an ability score. Constitution affects your maximum hit points and concentration saving throws.\nYour Constitution modifier is added to the number of hit points gained per level (including negative values), and is applied retroactively."
  },
  {
    ID: 4,
    Name: "Intelligence",
    Value: 8,
    Modifier: 0,
    Bio: "Intelligence is an ability score and the primary ability of wizards.\nIntelligence affects your Arcana, History, Investigation, Nature, and Religion skills. It also improves spellcasting for wizards, fighters (especially valuable for Eldritch Knights), and rogues (especially valuable for Arcane Tricksters), by increasing the chance of hitting an enemy with spell attack rolls, due to the increased Difficulty Class of spells with saving throws."
  },
  {
    ID: 5,
    Name: "Wisdom",
    Value: 8,
    Modifier: 0,
    Bio: "Wisdom is an ability score, and the primary ability of Clerics and Druids.\nWisdom affects your Animal Handling, Insight, Medicine, Perception, and Survival skills and improves spellcasting for Clerics, Druids, Monks and Rangers (better chance to hit enemies with spell attack rolls; increases the Difficulty Class of spells with Saving Throws)."
  },
  {
    ID: 6,
    Name: "Charisma",
    Value: 8,
    Modifier: 0,
    Bio: "Charisma is an ability score and the primary ability of Bards, Warlocks, and Sorcerers. Charisma affects its related skills (Deception, Intimidation, Performance, Persuasion) and improves spellcasting for Bards, Paladins, Warlocks and Sorcerers (better chance to hit enemies with spell attack rolls; increases the Difficulty Class of spells with saving throws)."
  }
];
const css$3 = {
  code: ':root{--primary-color:#066e79;--secondary-color:#edd8a0;--error-code:#ff0000;--race-image-height:700px;--race-image-width:400px;--select-element-width:(var(--race-image-width) - 50px);--select-element-height:(var(var(--race-image-height)) - 100px);--select-element-font-size:20px;--select-font-weight:bolder;--background-image-url:url("src/lib/logo/Site-Background.png")}.svelte-1qvtyxp.svelte-1qvtyxp{margin:0;padding:0;box-sizing:border-box;background-color:var(--primary-color);color:var(--secondary-color);font-family:"Oswald"}#CharStats.svelte-1qvtyxp.svelte-1qvtyxp{display:flex;flex-wrap:wrap;flex-direction:column;align-items:flex-start;justify-content:flex-start;max-height:var(--select-element-height);max-width:var(--select-element-width)}#CharStats.svelte-1qvtyxp div.svelte-1qvtyxp{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;align-self:flex-start;margin-bottom:10px;margin-left:10px;padding:3%}#CharStats.svelte-1qvtyxp label.svelte-1qvtyxp{font-weight:bolder;font-size:30px;margin-right:10px}#CharStats.svelte-1qvtyxp input.svelte-1qvtyxp{font-size:18px;max-width:50px;right:100%;height:max-content;width:max-content}',
  map: '{"version":3,"file":"CharStats.svelte","sources":["CharStats.svelte"],"sourcesContent":["<script>\\r\\n  import { characterStatistics } from \\"../lib/characterstatistics.mjs\\";\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<main>\\r\\n  <section id=\\"CharStats\\">\\r\\n    {#each characterStatistics as stat}\\r\\n      <div id=\\"StatInput\\">\\r\\n        <a href=\\"/{stat.Name}\\" style=\\"text-decoration: none;\\">\\r\\n          <label\\r\\n            on:mouseover={() => (event.target.style.color = \\"white\\")}\\r\\n            on:mouseout={() =>\\r\\n              (event.target.style.color = \\"var(--secondary-color)\\")}\\r\\n            >{stat.Name}\\r\\n          </label>\\r\\n        </a>\\r\\n        <input type=\\"number\\" min=\\"8\\" max=\\"15\\" bind:value={stat.Value} />\\r\\n      </div>\\r\\n    {/each}\\r\\n  </section>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  :root {\\r\\n  /* Site Variables */\\r\\n  --primary-color: #066e79;\\r\\n  --secondary-color: #edd8a0;\\r\\n  --error-code: #ff0000;\\r\\n\\r\\n  --race-image-height: 700px;\\r\\n  --race-image-width: 400px;\\r\\n  --select-element-width: (var(--race-image-width) - 50px);\\r\\n  --select-element-height: (var(var(--race-image-height)) - 100px);\\r\\n  --select-element-font-size: 20px;\\r\\n  --select-font-weight: bolder;\\r\\n\\r\\n  --background-image-url: url(\\"src/lib/logo/Site-Background.png\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* Global Styles */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  font-family: \\"Oswald\\";\\r\\n}\\r\\n\\r\\n.oswald-font {\\r\\n  /* Custom Site Font */\\r\\n  font-family: \\"Oswald\\", sans-serif;\\r\\n  font-optical-sizing: auto;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n  #CharStats {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: flex-start;\\r\\n  max-height: var(--select-element-height);\\r\\n  max-width: var(--select-element-width);\\r\\n}\\r\\n\\r\\n#CharStats div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  align-self: flex-start;\\r\\n  margin-bottom: 10px;\\r\\n  margin-left: 10px;\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\n#CharStats label {\\r\\n  font-weight: bolder;\\r\\n  font-size: 30px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n#CharStats input {\\r\\n  font-size: 18px;\\r\\n  max-width: 50px;\\r\\n  right: 100%;\\r\\n  height: max-content;\\r\\n  width: max-content;\\r\\n}\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAwBE,KAAM,CAEN,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,OAAO,CAC1B,YAAY,CAAE,OAAO,CAErB,mBAAmB,CAAE,KAAK,CAC1B,kBAAkB,CAAE,KAAK,CACzB,sBAAsB,CAAE,gCAAgC,CACxD,uBAAuB,CAAE,uCAAuC,CAChE,0BAA0B,CAAE,IAAI,CAChC,oBAAoB,CAAE,MAAM,CAE5B,sBAAsB,CAAE,uCAC1B,CAEA,8BAAE,CAEA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,WAAW,CAAE,QACf,CAcE,wCAAW,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,UAAU,CACvB,eAAe,CAAE,UAAU,CAC3B,UAAU,CAAE,IAAI,uBAAuB,CAAC,CACxC,SAAS,CAAE,IAAI,sBAAsB,CACvC,CAEA,yBAAU,CAAC,kBAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,UAAU,CACvB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,EACX,CAEA,yBAAU,CAAC,oBAAM,CACf,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,IAChB,CAEA,yBAAU,CAAC,oBAAM,CACf,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,WACT"}'
};
const CharStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<main class="svelte-1qvtyxp"><section id="CharStats" class="svelte-1qvtyxp">${each(characterStatistics, (stat) => {
    return `<div id="StatInput" class="svelte-1qvtyxp"><a href="${"/" + escape(stat.Name, true)}" style="text-decoration: none;" class="svelte-1qvtyxp"><label class="svelte-1qvtyxp">${escape(stat.Name)} </label></a> <input type="number" min="8" max="15" class="svelte-1qvtyxp"${add_attribute("value", stat.Value, 0)}> </div>`;
  })}</section> </main>`;
});
let classes = [
  {
    ID: 1,
    Name: "Barbarian",
    Desc: "Barbarians use their martial prowess and primal rage to strengthen themselves and dominate enemies in combat.",
    Subclasses: [
      {
        Name: "Beserker"
      },
      {
        Name: "Wildheart"
      },
      {
        Name: "Wild Magic"
      }
    ]
  },
  {
    ID: 2,
    Name: "Bard",
    Desc: "Bards are expert storytellers, artists, and performers. Bards channel their power through song, speech, or performance to cast Spells. Bards use Charisma as their primary ability score.",
    Subclasses: [
      {
        Name: "College of Lore"
      },
      {
        Name: "College of Valor"
      },
      {
        Name: "College of Swords"
      }
    ]
  },
  {
    ID: 3,
    Name: "Cleric",
    Desc: "Clerics worship and enact their deities' will to the world, for better or worse. They channel the power of their faith to cast Spells. Clerics use Wisdom as their primary ability score.",
    Subclasses: [
      {
        Name: "Life Domain"
      },
      {
        Name: "Light Domain"
      },
      {
        Name: "Trickery Domain"
      },
      {
        Name: "Knowledge Domain"
      },
      {
        Name: "Nature Domain"
      },
      {
        Name: "Tempest Domain"
      },
      {
        Name: "War Domain"
      }
    ]
  },
  {
    ID: 4,
    Name: "Druid",
    Desc: "Druids are closely attuned with nature and the animals that live in it. They utilise the power of nature to cast Spells and have the ability to transform into various creatures. Druids use Wisdom as their primary ability score.",
    Subclasses: [
      {
        Name: "Circle of the Land"
      },
      {
        Name: "Circle of the Moon"
      },
      {
        Name: "Circle of the Spores"
      }
    ]
  },
  {
    ID: 5,
    Name: "Fighter",
    Desc: "Fighters are the masters of martial combat. They use their combat skills to protect allies and defeat enemies. Fighters use Strength or Dexterity as their primary ability score.",
    Subclasses: [
      {
        Name: "Champion"
      },
      {
        Name: "Battle Master"
      },
      {
        Name: "Eldritch Knight"
      }
    ]
  },
  {
    ID: 6,
    Name: "Monk",
    Desc: "Monks are martial artists who use their skills to protect and heal their allies. Monks use Dexterity and Wisdom as their primary ability scores.",
    Subclasses: [
      {
        Name: "Way of the Open Hand"
      },
      {
        Name: "Way of the Shadow"
      },
      {
        Name: "Way of the Four Elements"
      }
    ]
  },
  {
    ID: 7,
    Name: "Paladin",
    Desc: "Paladins are holy warriors who use their faith to protect and heal their allies. Paladins use Strength and Charisma as their primary ability scores.",
    Subclasses: [
      {
        Name: "Oath of Devotion"
      },
      {
        Name: "Oath of the Ancients"
      },
      {
        Name: "Oath of Vengeance"
      }
    ]
  },
  {
    ID: 8,
    Name: "Ranger",
    Desc: "Rangers are skilled hunters and trackers who use their knowledge of the wilderness to protect and heal their allies. Rangers use Dexterity and Wisdom as their primary ability scores.",
    Subclasses: [
      {
        Name: "Hunter"
      },
      {
        Name: "Beast Master"
      },
      {
        Name: "Gloom Stalker"
      }
    ]
  },
  {
    ID: 9,
    Name: "Rogue",
    Desc: "Rogues are skilled thieves and assassins who use their cunning and stealth to protect and heal their allies. Rogues use Dexterity as their primary ability score.",
    Subclasses: [
      {
        Name: "Thief"
      },
      {
        Name: "Assassin"
      },
      {
        Name: "Arcane Trickster"
      }
    ]
  },
  {
    ID: 10,
    Name: "Sorcerer",
    Desc: "Sorcerers are spellcasters who use their innate magical abilities to cast Spells. Sorcerers use Charisma as their primary ability score.",
    Subclasses: [
      {
        Name: "Draconic Bloodline"
      },
      {
        Name: "Wild Magic"
      },
      {
        Name: "Divine Soul"
      }
    ]
  },
  {
    ID: 11,
    Name: "Warlock",
    Desc: "Warlocks are spellcasters who make pacts with otherworldly beings to gain magical power. Warlocks use Charisma as their primary ability score.",
    Subclasses: [
      {
        Name: "The Archfey"
      },
      {
        Name: "The Fiend"
      },
      {
        Name: "The Great Old One"
      }
    ]
  },
  {
    ID: 12,
    Name: "Wizard",
    Desc: "Wizards are spellcasters who use their knowledge of magic to cast Spells. Wizards use Intelligence as their primary ability score.",
    Subclasses: [
      {
        Name: "School of Abjuration"
      },
      {
        Name: "School of Conjuration"
      },
      {
        Name: "School of Divination"
      },
      {
        Name: "School of Enchantment"
      },
      {
        Name: "School of Evocation"
      },
      {
        Name: "School of Illusion"
      },
      {
        Name: "School of Necromancy"
      },
      {
        Name: "School of Transmutation"
      }
    ]
  }
];
const css$2 = {
  code: ':root{--primary-color:#066e79;--secondary-color:#edd8a0;--error-code:#ff0000;--race-image-height:700px;--race-image-width:400px;--select-element-width:(var(--race-image-width) - 50px);--select-element-height:(var(var(--race-image-height)) - 100px);--select-element-font-size:20px;--select-font-weight:bolder;--background-image-url:url("src/lib/logo/Site-Background.png")}.svelte-mj6u8u{margin:0;padding:0;box-sizing:border-box;background-color:var(--primary-color);color:var(--secondary-color);font-family:"Oswald"}select.svelte-mj6u8u{font-size:16px;margin-bottom:20px}',
  map: '{"version":3,"file":"ClassSelect.svelte","sources":["ClassSelect.svelte"],"sourcesContent":["<script>\\r\\n    import {classes} from \\"../lib/classes.mjs\\";\\r\\n\\r\\n    let selectedClass = \\"\\";\\r\\n    let selectedSubclass = \\"\\";\\r\\n\\r\\n    function handleClassChange(event) {\\r\\n        selectedClass = event.target.value;\\r\\n        console.log(selectedClass);\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<select bind:value={selectedClass} on:change={handleClassChange} id=\\"ClassSelect\\">\\r\\n    {#each classes as dungeonClass}\\r\\n        <option value={dungeonClass.Name}>{dungeonClass.Name}</option>\\r\\n    {/each}\\r\\n</select>\\r\\n\\r\\n<style>\\r\\n    :root {\\r\\n  /* Site Variables */\\r\\n  --primary-color: #066e79;\\r\\n  --secondary-color: #edd8a0;\\r\\n  --error-code: #ff0000;\\r\\n\\r\\n  --race-image-height: 700px;\\r\\n  --race-image-width: 400px;\\r\\n  --select-element-width: (var(--race-image-width) - 50px);\\r\\n  --select-element-height: (var(var(--race-image-height)) - 100px);\\r\\n  --select-element-font-size: 20px;\\r\\n  --select-font-weight: bolder;\\r\\n\\r\\n  --background-image-url: url(\\"src/lib/logo/Site-Background.png\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* Global Styles */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  font-family: \\"Oswald\\";\\r\\n}\\r\\n\\r\\n.oswald-font {\\r\\n  /* Custom Site Font */\\r\\n  font-family: \\"Oswald\\", sans-serif;\\r\\n  font-optical-sizing: auto;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AAoBI,KAAM,CAER,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,OAAO,CAC1B,YAAY,CAAE,OAAO,CAErB,mBAAmB,CAAE,KAAK,CAC1B,kBAAkB,CAAE,KAAK,CACzB,sBAAsB,CAAE,gCAAgC,CACxD,uBAAuB,CAAE,uCAAuC,CAChE,0BAA0B,CAAE,IAAI,CAChC,oBAAoB,CAAE,MAAM,CAE5B,sBAAsB,CAAE,uCAC1B,CAEA,cAAE,CAEA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,WAAW,CAAE,QACf,CAUA,oBAAO,CACL,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB"}'
};
const ClassSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<select id="ClassSelect" class="svelte-mj6u8u">${each(classes, (dungeonClass) => {
    return `<option${add_attribute("value", dungeonClass.Name, 0)} class="svelte-mj6u8u">${escape(dungeonClass.Name)}</option>`;
  })}</select>`;
});
let races = [
  {
    name: "Human",
    subraces: [],
    Image: "/RaceImages/human.jpg"
  },
  {
    name: "Elf",
    subraces: [
      {
        name: "High Elf",
        Image: "/RaceImages/elf1.jpg"
      },
      {
        name: "Wood Elf",
        Image: "/RaceImages/elf2.jpg"
      },
      {
        name: "Drow Elf",
        Image: "/RaceImages/elf3.jpg"
      }
    ],
    Image: "/RaceImages/elf1.jpg"
  },
  {
    name: "Dwarf",
    subraces: [
      {
        name: "Mountain Dwarf",
        Image: "/RaceImages/dwarf1.jpg"
      },
      {
        name: "Hill Dwarf",
        Image: "/RaceImages/dwarf2.jpg"
      },
      {
        name: "Duergar",
        Image: "/RaceImages/dwarf3.jpg"
      }
    ],
    Image: "/RaceImages/dwarf1.jpg"
  },
  {
    name: "Halfling",
    subraces: [
      {
        name: "Lightfoot",
        Image: "/RaceImages/ling1.jpg"
      },
      {
        name: "Strongheart",
        Image: "/RaceImages/ling2.jpg"
      }
    ],
    Image: "/RaceImages/ling1.jpg"
  },
  {
    name: "Gnome",
    subraces: [
      {
        name: "Forest Gnome",
        Image: "/RaceImages/ling3.jpg"
      },
      {
        name: "Rock Gnome",
        Image: "/RaceImages/ling4.jpg"
      }
    ],
    Image: "/RaceImages/ling3.jpg"
  },
  {
    name: "Half-Elf",
    subraces: [
      {
        name: "High Elf",
        Image: "/RaceImages/half1.jpg"
      },
      {
        name: "Wood Elf",
        Image: "/RaceImages/half2.jpg"
      },
      {
        name: "Drow Half Elf",
        Image: "/RaceImages/half3.jpg"
      }
    ],
    Image: "/RaceImages/half1.jpg"
  },
  {
    name: "Half-Orc",
    subraces: [],
    Image: "/RaceImages/halforc.jpg"
  },
  {
    name: "Tiefling",
    subraces: [
      {
        name: "Asmodeus",
        Image: "/RaceImages/tief1.jpg"
      },
      {
        name: "Mephistopheles",
        Image: "/RaceImages/tief2.jpg"
      },
      {
        name: "Zariel",
        Image: "/RaceImages/tief3.jpg"
      }
    ],
    Image: "/RaceImages/tief1.jpg"
  },
  {
    name: "Drow",
    subraces: [
      {
        name: "Seldarine",
        Image: "/RaceImages/drow1.jpg"
      },
      {
        name: "Lolth",
        Image: "/RaceImages/drow2.jpg"
      }
    ],
    Image: "/RaceImages/drow1.jpg"
  },
  {
    name: "Githyanki",
    subraces: [],
    Image: "/RaceImages/gith.jpg"
  },
  {
    name: "Dragonborn",
    subraces: [
      {
        name: "Red",
        Image: "/RaceImages/dra1.jpg"
      },
      {
        name: "Blue",
        Image: "/RaceImages/dra2.jpg"
      },
      {
        name: "Green",
        Image: "/RaceImages/dra3.jpg"
      },
      {
        name: "Black",
        Image: "/RaceImages/dra4.jpg"
      },
      {
        name: "White",
        Image: "/RaceImages/dra5.jpg"
      },
      {
        name: "Brass",
        Image: "/RaceImages/dra6.jpg"
      },
      {
        name: "Bronze",
        Image: "/RaceImages/dra7.jpg"
      },
      {
        name: "Copper",
        Image: "/RaceImages/dra8.jpg"
      },
      {
        name: "Gold",
        Image: "/RaceImages/dra9.jpg"
      },
      {
        name: "Silver",
        Image: "/RaceImages/dra10.jpg"
      }
    ],
    Image: "/RaceImages/dra1.jpg"
  }
];
const css$1 = {
  code: ':root{--primary-color:#066e79;--secondary-color:#edd8a0;--error-code:#ff0000;--race-image-height:700px;--race-image-width:400px;--select-element-width:(var(--race-image-width) - 50px);--select-element-height:(var(var(--race-image-height)) - 100px);--select-element-font-size:20px;--select-font-weight:bolder;--background-image-url:url("src/lib/logo/Site-Background.png")}.svelte-5nc5u6.svelte-5nc5u6{margin:0;padding:0;box-sizing:border-box;background-color:var(--primary-color);color:var(--secondary-color);font-family:"Oswald"}select.svelte-5nc5u6.svelte-5nc5u6{font-size:16px;margin-bottom:20px}#RaceDisplay.svelte-5nc5u6.svelte-5nc5u6{display:flex;flex-direction:column;align-items:center;justify-content:center;width:var(--race-image-width);height:var(--race-image-height)}#RaceDisplay.svelte-5nc5u6 img.svelte-5nc5u6{max-height:var(--race-image-height);max-width:var(--race-image-width);padding:20px}#raceSelect.svelte-5nc5u6.svelte-5nc5u6{display:flex;flex-direction:column;align-items:center;justify-content:center}#raceSelect.svelte-5nc5u6 select.svelte-5nc5u6{padding:10px;font-size:16px;margin-bottom:20px;max-width:var(--select-element-width);max-height:var(--select-element-height)}#RaceContainer.svelte-5nc5u6.svelte-5nc5u6{display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid var(--secondary-color)}',
  map: '{"version":3,"file":"RaceSelect.svelte","sources":["RaceSelect.svelte"],"sourcesContent":["<script>\\r\\n  import { races } from \\"../lib/playableRaces.mjs\\";\\r\\n\\r\\n  let selectedRace = \\"\\";\\r\\n  let selectedSubrace = \\"\\";\\r\\n  let selectedRaceImage = {};\\r\\n  let selectedSubraceImage = {};\\r\\n  let hasSubrace = false;\\r\\n\\r\\n  function handleRaceChange(event) {\\r\\n    selectedRace = event.target.value;\\r\\n    hasSubrace = false;\\r\\n    selectedRaceImage = races.find((item) => item.name === selectedRace);\\r\\n    console.log(selectedRaceImage?.Image);\\r\\n    console.log(hasSubrace);\\r\\n  }\\r\\n\\r\\n  function handleSubraceChange(event) {\\r\\n    selectedSubrace = event.target.value;\\r\\n    hasSubrace = true;\\r\\n    selectedSubraceImage = selectedRaceImage.subraces.find(\\r\\n      (item) => item.name === selectedSubrace\\r\\n    );\\r\\n    console.log(selectedSubraceImage?.Image);\\r\\n    console.log(hasSubrace);\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div id=\\"RaceContainer\\">\\r\\n  <section id=\\"RaceDisplay\\">\\r\\n    {#if hasSubrace === false && selectedRaceImage}\\r\\n      <img src={selectedRaceImage?.Image} alt={selectedRaceImage?.name} />\\r\\n    {:else if hasSubrace === true}\\r\\n      <img src={selectedSubraceImage?.Image} alt={selectedSubraceImage?.name} />\\r\\n    {:else}\\r\\n      <img src={races[1].Image} alt=\\"Placeholder\\" />\\r\\n    {/if}\\r\\n  </section>\\r\\n  <section id=\\"raceSelect\\">\\r\\n    <select bind:value={selectedRace} on:change={handleRaceChange}>\\r\\n      <option value=\\"\\">Select a race...</option>\\r\\n      {#each races as race}\\r\\n        <option value={race.name}>{race.name}</option>\\r\\n      {/each}\\r\\n    </select>\\r\\n\\r\\n    {#if selectedRace}\\r\\n      {#each races as race}\\r\\n        {#if race.name === selectedRace && race.subraces && race.subraces.length > 0}\\r\\n          <select bind:value={selectedSubrace} on:change={handleSubraceChange}>\\r\\n            <option value=\\"\\">Select a subrace...</option>\\r\\n            {#each race.subraces as subrace}\\r\\n              <option value={subrace.name}>{subrace.name}</option>\\r\\n            {/each}\\r\\n          </select>\\r\\n        {/if}\\r\\n      {/each}\\r\\n    {/if}\\r\\n  </section>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  :root {\\r\\n  /* Site Variables */\\r\\n  --primary-color: #066e79;\\r\\n  --secondary-color: #edd8a0;\\r\\n  --error-code: #ff0000;\\r\\n\\r\\n  --race-image-height: 700px;\\r\\n  --race-image-width: 400px;\\r\\n  --select-element-width: (var(--race-image-width) - 50px);\\r\\n  --select-element-height: (var(var(--race-image-height)) - 100px);\\r\\n  --select-element-font-size: 20px;\\r\\n  --select-font-weight: bolder;\\r\\n\\r\\n  --background-image-url: url(\\"src/lib/logo/Site-Background.png\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* Global Styles */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  font-family: \\"Oswald\\";\\r\\n}\\r\\n\\r\\n.oswald-font {\\r\\n  /* Custom Site Font */\\r\\n  font-family: \\"Oswald\\", sans-serif;\\r\\n  font-optical-sizing: auto;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n  #RaceDisplay {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: var(--race-image-width);\\r\\n  height: var(--race-image-height);\\r\\n}\\r\\n\\r\\n#RaceDisplay img {\\r\\n  max-height: var(--race-image-height);\\r\\n  max-width: var(--race-image-width);\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n#raceSelect {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#raceSelect select {\\r\\n  padding: 10px;\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n  max-width: var(--select-element-width);\\r\\n  max-height: var(--select-element-height);\\r\\n}\\r\\n\\r\\n#RaceContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 1px solid var(--secondary-color);\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AA8DE,KAAM,CAEN,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,OAAO,CAC1B,YAAY,CAAE,OAAO,CAErB,mBAAmB,CAAE,KAAK,CAC1B,kBAAkB,CAAE,KAAK,CACzB,sBAAsB,CAAE,gCAAgC,CACxD,uBAAuB,CAAE,uCAAuC,CAChE,0BAA0B,CAAE,IAAI,CAChC,oBAAoB,CAAE,MAAM,CAE5B,sBAAsB,CAAE,uCAC1B,CAEA,4BAAE,CAEA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,WAAW,CAAE,QACf,CAUA,kCAAO,CACL,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACE,wCAAa,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CACjC,CAEA,0BAAY,CAAC,iBAAI,CACf,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,OAAO,CAAE,IACX,CAEA,uCAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CAEA,yBAAW,CAAC,oBAAO,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IAAI,sBAAsB,CAAC,CACtC,UAAU,CAAE,IAAI,uBAAuB,CACzC,CAEA,0CAAe,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CACzC"}'
};
const RaceSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedRaceImage = {};
  $$result.css.add(css$1);
  return `<div id="RaceContainer" class="svelte-5nc5u6"><section id="RaceDisplay" class="svelte-5nc5u6">${selectedRaceImage ? `<img${add_attribute("src", selectedRaceImage?.Image, 0)}${add_attribute("alt", selectedRaceImage?.name, 0)} class="svelte-5nc5u6">` : `${`<img${add_attribute("src", races[1].Image, 0)} alt="Placeholder" class="svelte-5nc5u6">`}`}</section> <section id="raceSelect" class="svelte-5nc5u6"><select class="svelte-5nc5u6"><option value="" class="svelte-5nc5u6" data-svelte-h="svelte-158a30g">Select a race...</option>${each(races, (race) => {
    return `<option${add_attribute("value", race.name, 0)} class="svelte-5nc5u6">${escape(race.name)}</option>`;
  })}</select> ${``}</section> </div>`;
});
const css = {
  code: ':root{--primary-color:#066e79;--secondary-color:#edd8a0;--error-code:#ff0000;--race-image-height:700px;--race-image-width:400px;--select-element-width:(var(--race-image-width) - 50px);--select-element-height:(var(var(--race-image-height)) - 100px);--select-element-font-size:20px;--select-font-weight:bolder;--background-image-url:url("src/lib/logo/Site-Background.png")}.svelte-1ns9ys4{margin:0;padding:0;box-sizing:border-box;background-color:var(--primary-color);color:var(--secondary-color);font-family:"Oswald"}#HomeMain.svelte-1ns9ys4{display:flex;justify-content:center;align-items:center;height:95vh}#CharCreation.svelte-1ns9ys4{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px}#CharacterName.svelte-1ns9ys4{margin:10px;padding:10px;border:2px solid var(--secondary-color);font-weight:bold;font-size:18px;max-width:300px;text-align:center}#CreationContainer.svelte-1ns9ys4{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:800px;margin-top:-80px}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import ArmourSelect from \\"$lib/ArmourSelect.svelte\\";\\r\\n  import CharStats from \\"$lib/CharStats.svelte\\";\\r\\n  import ClassSelect from \\"$lib/ClassSelect.svelte\\";\\r\\n  import RaceSelect from \\"$lib/RaceSelect.svelte\\";\\r\\n  import LoadPopUp from \\"../lib/LoadPopUp.svelte\\";\\r\\n  import { races } from \\"../lib/playableRaces.mjs\\";\\r\\n\\r\\n  export let item;\\r\\n  console.log(item);\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<main id=\\"HomeMain\\">\\r\\n  <section id=\\"CreationContainer\\">\\r\\n    <input type=\\"text\\" id=\\"CharacterName\\" placeholder=\\"Character Name\\" />\\r\\n    <div id=\\"CharCreation\\">\\r\\n      <ArmourSelect />\\r\\n      <RaceSelect />\\r\\n      <div>\\r\\n        <CharStats />\\r\\n        <ClassSelect />\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\r\\n:root {\\r\\n  /* Site Variables */\\r\\n  --primary-color: #066e79;\\r\\n  --secondary-color: #edd8a0;\\r\\n  --error-code: #ff0000;\\r\\n\\r\\n  --race-image-height: 700px;\\r\\n  --race-image-width: 400px;\\r\\n  --select-element-width: (var(--race-image-width) - 50px);\\r\\n  --select-element-height: (var(var(--race-image-height)) - 100px);\\r\\n  --select-element-font-size: 20px;\\r\\n  --select-font-weight: bolder;\\r\\n\\r\\n  --background-image-url: url(\\"src/lib/logo/Site-Background.png\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* Global Styles */\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--secondary-color);\\r\\n  font-family: \\"Oswald\\";\\r\\n}\\r\\n\\r\\n.oswald-font {\\r\\n  /* Custom Site Font */\\r\\n  font-family: \\"Oswald\\", sans-serif;\\r\\n  font-optical-sizing: auto;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nselect {\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n  #HomeMain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 95vh;\\r\\n}\\r\\n\\r\\n#CharCreation {\\r\\n  display: flex;\\r\\n  flex-direction: row; /* Ensure components are in a row */\\r\\n  justify-content: center; /* Center components horizontally */\\r\\n  align-items: center; /* Center components vertically */\\r\\n  gap: 20px; /* Adjust spacing between components */\\r\\n}\\r\\n\\r\\n#CharacterName {\\r\\n  margin: 10px;\\r\\n  padding: 10px;\\r\\n  border: 2px solid var(--secondary-color);\\r\\n  font-weight: bold;\\r\\n  font-size: 18px;\\r\\n  max-width: 300px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#CreationContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center; /* Center children horizontally */\\r\\n  justify-content: center; /* Center children vertically */\\r\\n  text-align: center; /* Center text within the container */\\r\\n  max-width: 800px; /* Adjust as necessary */\\r\\n  margin-top: -80px;\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BA,KAAM,CAEJ,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,OAAO,CAC1B,YAAY,CAAE,OAAO,CAErB,mBAAmB,CAAE,KAAK,CAC1B,kBAAkB,CAAE,KAAK,CACzB,sBAAsB,CAAE,gCAAgC,CACxD,uBAAuB,CAAE,uCAAuC,CAChE,0BAA0B,CAAE,IAAI,CAChC,oBAAoB,CAAE,MAAM,CAE5B,sBAAsB,CAAE,uCAC1B,CAEA,eAAE,CAEA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,WAAW,CAAE,QACf,CAcE,wBAAU,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IACV,CAEA,4BAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,6BAAe,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CAAC,CACxC,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd,CAEA,iCAAmB,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  console.log(item);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<main id="HomeMain" class="svelte-1ns9ys4"><section id="CreationContainer" class="svelte-1ns9ys4"><input type="text" id="CharacterName" placeholder="Character Name" class="svelte-1ns9ys4"> <div id="CharCreation" class="svelte-1ns9ys4">${validate_component(ArmourSelect, "ArmourSelect").$$render($$result, {}, {}, {})} ${validate_component(RaceSelect, "RaceSelect").$$render($$result, {}, {}, {})} <div class="svelte-1ns9ys4">${validate_component(CharStats, "CharStats").$$render($$result, {}, {}, {})} ${validate_component(ClassSelect, "ClassSelect").$$render($$result, {}, {}, {})}</div></div></section> </main>`;
});
export {
  Page as default
};
