import { Router } from "express";

const router = Router();

router.get("/api/grades", (req, res) => {
    return res.send([{ test: "helloWorld v2" }]);
});

export default router;