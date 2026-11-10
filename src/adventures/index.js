import { AV } from "./abomination-vaults/index.js";
import { AoA } from "./age-of-ashes/index.js";
import { AoE } from "./agents-of-edgewatch/index.js";
import { Bestiaries } from "./bestiaries/index.js";
import { Bounty } from "./bounties/index.js";
import { EC } from "./extinction-curse/index.js";
import { FoRP } from "./fists-of-the-ruby-phoenix/index.js";
import { LostOmens } from "./lost-omens/index.js";
import { OneShot } from "./one-shots/index.js";
import { PFSIntro } from "./pfs/intro/index.js";
import { PFS1 } from "./pfs/season1/index.js";
import { PFS2 } from "./pfs/season2/index.js";
import { PFS3 } from "./pfs/season3/index.js";
import { PFS4 } from "./pfs/season4/index.js";
import { PFS5 } from "./pfs/season5/index.js";
import { PFS6 } from "./pfs/season6/index.js";
import { PFS7 } from "./pfs/season7/index.js";
import { QFF } from "./quest-for-the-frozen-flame/index.js";
import { Rulebooks } from "./rulebooks/index.js";
import { Standalone } from "./standalone/index.js";
import { SoT } from "./strength-of-thousands/index.js";

export function getAllAdventureModules() {
  return []
    .concat(Object.values(Rulebooks))
    .concat(Object.values(Bestiaries))
    .concat(Object.values(Standalone))
    .concat(Object.values(OneShot))
    .concat(Object.values(AoA))
    .concat(Object.values(EC))
    .concat(Object.values(AoE))
    .concat(Object.values(AV))
    .concat(Object.values(FoRP))
    .concat(Object.values(SoT))
    .concat(Object.values(QFF))
    .concat(Object.values(PFS1))
    .concat(Object.values(PFS2))
    .concat(Object.values(PFS3))
    .concat(Object.values(PFS4))
    .concat(Object.values(PFS5))
    .concat(Object.values(PFS6))
    .concat(Object.values(PFS7))
    .concat(Object.values(PFSIntro))
    .concat(Object.values(Bounty))
    .concat(Object.values(LostOmens))
    .map((c) => new c());
}

export function getAdventureModule(parsedPdf) {
  return getAllAdventureModules().find((a) => a.detect(parsedPdf));
}
