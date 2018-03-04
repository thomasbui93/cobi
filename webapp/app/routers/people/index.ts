import { Router } from "express";

const router = Router();

import entry from "./entry";
import person from "./person";
import relation from "./relation";
import query from "./query";

router.get("/", entry);
router.get("/:personId", person);
router.get("/related/:personIdSequences", relation);
router.get("/:query", query);

export default router;