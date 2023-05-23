import { Flags } from "@oclif/core";
import { units } from "../../utils/constants";

export const ethUnitFlags = {
  wei: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "wei"),
  }),
  kwei: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "kwei"),
  }),
  mwei: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "mwei"),
  }),
  gwei: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "gwei"),
  }),
  szabo: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "szabo"),
  }),
  finney: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "finney"),
  }),
  ether: Flags.boolean({
    description: "eth denomination",
    exclusive: units.filter((unit) => unit !== "ether"),
  }),
};
