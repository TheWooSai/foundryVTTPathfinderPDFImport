import { MODULE_ID } from "../constants.js";

export class Journal {
  name;
  flags;
  text;
  src;
  sort;
  type;
  journalId;
  journalPageId;
  pages;
  constructor(name, content, img, id = "") {
    this.name = name;
    this.flags = {
      [MODULE_ID]: {
        id,
      },
    };
    this.text = {
      content,
      format: 1,
    };
    this.src = img;
    this.type = img !== undefined ? "image" : "text";
  }
}

export class Actor {
  id;
  name = "";
  img = "systems/pf2e/icons/default-icons/npc.svg";
  type;
  data;
  items = [];
  folder;
}

export class SaveDetails {
  value = 0;
  saveDetail = "";
}

export class HazardActor extends Actor {
  constructor() {
    super();
    this.type = "hazard";
    this.data = new HazardDetails();
  }
}

export class HazardAttributes {
  hasHealth = false;
  ac = {
    value: 10,
  };
  hp = {
    value: 0,
    max: 0,
    details: "",
  };
  hardness = 0;
  stealth = {
    value: 0,
    details: "",
  };
}

export class HazardDetails {
  source = {
    value: "",
  };
  flavourText = "";
  nethysUrl = "";
  recallKnowledgeText = "";
  sidebarText = "";
  saves = {
    fortitude: new SaveDetails(),
    reflex: new SaveDetails(),
    will: new SaveDetails(),
  };
  attributes = new HazardAttributes();
  details = {
    isComplex: false,
    level: 0,
    disable: "",
    description: "",
    reset: "",
    routine: "",
  };
  traits = {
    value: [],
    di: {
      custom: "",
      value: [],
    },
    dr: [],
    dv: [],
    ci: [],
  };
}

export class NPCActor extends Actor {
  constructor() {
    super();
    this.type = "npc";
    this.data = new NPCData();
  }
}

export class NPCData {
  abilities;
  saves;
  attributes;
  details;
  traits;
  constructor() {
    Object.assign(this, {
      abilities: {
        str: {
          value: 10,
          mod: 0,
        },
        dex: {
          value: 10,
          mod: 0,
        },
        con: {
          value: 10,
          mod: 0,
        },
        int: {
          value: 10,
          mod: 0,
        },
        wis: {
          value: 10,
          mod: 0,
        },
        cha: {
          value: 10,
          mod: 0,
        },
      },
      saves: {
        fortitude: new SaveDetails(),
        reflex: new SaveDetails(),
        will: new SaveDetails(),
      },
      attributes: {
        ac: {
          value: 0,
          details: "",
        },
        allSaves: {
          value: "",
        },
        shield: {
          value: 0,
          max: 0,
          brokenThreshold: 0,
          hardness: 0,
          ac: 2,
        },
        hp: {
          value: 0,
          max: 0,
          temp: 0,
          details: "",
        },
        perception: {
          value: 0,
        },
        speed: {
          value: "",
          special: "",
          otherSpeeds: [],
        },
      },
      details: {
        alignment: {
          value: "",
        },
        level: {
          value: 0,
        },
        source: {
          value: "",
        },
      },
      traits: {
        size: {
          value: "med",
        },
        senses: {
          value: "",
        },
        value: [],
        languages: {
          value: [],
          custom: "",
        },
        di: {
          custom: "",
          value: [],
        },
        dr: [],
        dv: [],
        ci: [],
        rarity: {
          value: "common",
        },
      },
    });
  }
}

export class Item {
  _id;
  name = "";
  img = "icons/svg/mystery-man.svg";
  type;
  data;
  folder;
  flags = {};
}

export class ActionItem extends Item {
  constructor() {
    super();
    this.type = "action";
    this.data = new ActionItemDetails();
  }
}

export class MeleeItem extends Item {
  constructor() {
    super();
    this.type = "melee";
    this.data = new MeleeItemDetails();
    this.img = "systems/pf2e/icons/default-icons/melee.svg";
  }
}

export class LoreItem extends Item {
  constructor() {
    super();
    this.type = "lore";
    this.data = new LoreItemDetails();
    this.img = "systems/pf2e/icons/default-icons/lore.svg";
  }
}

export class EquipmentItem extends Item {
  constructor() {
    super();
    this.type = "equipment";
    this.data = new EquipmentItemDetails();
  }
}

export class FeatItem extends Item {
  constructor() {
    super();
    this.type = "feat";
    this.data = new FeatItemDetails();
    this.img = "systems/pf2e/icons/features/feats/feats.webp";
  }
}

export class SpellcastingItem extends Item {
  constructor() {
    super();
    this.type = "spellcastingEntry";
    this.data = new SpellcastingItemDetails();
  }
}

export class SpellItem extends Item {
  constructor() {
    super();
    this.type = "spell";
    this.data = new SpellItemDetails();
  }
}

export class ActionItemDetails {
  description = {
    value: "",
  };
  source = {
    value: "",
  };
  traits = {
    value: [],
    custom: "",
  };
  actionType = {
    value: "reaction",
  };
  actionCategory = {
    value: "offensive",
  };
  actions = {
    value: "",
  };
}

export class MeleeItemDetails {
  description = {
    value: "",
  };
  source = {
    value: "",
  };
  traits = {
    value: [],
    custom: "",
  };
  bonus = {
    value: 0,
  };
  damageRolls = {};
  attackEffects = {
    value: [],
    custom: "",
  };
  weaponType = {
    value: "melee",
  };
}

export class LoreItemDetails {
  description;
  mod;
  constructor() {
    Object.assign(this, {
      description: {
        value: "",
      },
      mod: {
        value: 0,
      },
    });
  }
}

export class EquipmentItemDetails {
  description;
  quantity;
  constructor() {
    Object.assign(this, {
      description: {
        value: "",
      },
      quantity: {
        value: 1,
      },
    });
  }
}

export class FeatItemDetails {
  featType = {
    value: "bonus",
  };
  actionType = {
    value: "",
  };
  actionCategory = {
    value: "",
  };
  actions = {
    value: "",
  };
  prerequisites = {
    value: "",
  };
  description = {
    value: "",
    chat: "",
    unidentified: "",
  };
  source = {
    value: "",
  };
  traits = {
    value: [],
  };
  rarity = {
    value: "common",
  };
  usage = {
    value: "",
  };
  level = {
    value: 0,
  };
}

export class SpellcastingSlotDetails {
  prepared = {};
  value = 0;
  max = 0;
}

export class SpellcastingItemDetails {
  ability = {
    value: "cha",
  };
  spelldc = {
    value: 0,
    dc: 0,
    item: 0,
    mod: 0,
  };
  tradition = {
    value: "divine",
  };
  prepared = {
    value: "prepared",
  };
  showUnpreparedSpells = {
    value: false,
  };
  showSlotlessLevels = {
    value: false,
  };
  proficiency = {
    value: 0,
  };
  displayLevels = {};
  slots = {
    slot0: new SpellcastingSlotDetails(),
    slot1: new SpellcastingSlotDetails(),
    slot2: new SpellcastingSlotDetails(),
    slot3: new SpellcastingSlotDetails(),
    slot4: new SpellcastingSlotDetails(),
    slot5: new SpellcastingSlotDetails(),
    slot6: new SpellcastingSlotDetails(),
    slot7: new SpellcastingSlotDetails(),
    slot8: new SpellcastingSlotDetails(),
    slot9: new SpellcastingSlotDetails(),
    slot10: new SpellcastingSlotDetails(),
    slot11: new SpellcastingSlotDetails(),
  };
  signatureSpells = {
    value: [],
  };
  autoHeightenLevel = {
    value: null,
  };
}

export class SpellItemDetails {
  spellType = {
    value: "",
  };
  spellCategorie = {
    value: "",
  };
  traditions = {
    value: [],
  };
  school = {
    value: "",
  };
  components = {
    value: "",
  };
  materials = {
    value: "",
  };
  target = {
    value: "",
  };
  range = {
    value: "",
  };
  area = {
    value: "",
  };
  time = {
    value: "",
  };
  duration = {
    value: "",
  };
  damage = {
    value: "",
    applyMod: false,
  };
  damageType = {
    value: "",
  };
  scaling = {
    mode: "",
    formula: "",
  };
  save = {
    basic: "",
    value: "",
  };
  sustained = {
    value: false,
  };
  cost = {
    value: "",
  };
  ability = {
    value: "",
  };
  prepared = {
    value: false,
  };
  location = {
    value: "",
  };
  description = {
    value: "",
  };
  source = {
    value: "",
  };
  traits = {
    value: [],
    custom: "",
  };
  rarity = {
    value: "common",
  };
  usage = {
    value: "",
  };
  level = {
    value: 0,
  };
}
