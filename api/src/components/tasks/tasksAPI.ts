import { Router } from "express";
import sc from "../../utils/statusCodes";
import { model, setModel } from "../../db";

const router = Router();

// GET TASKS
router.get("/", async (req, res, next) => {
  try {
    const data = model;
    res.status(sc.OK).json({ status: "success", tasks: data });
  } catch (error) {
    next(error);
  }
});

// GET A TASK
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = model.find((task) => task.id === parseInt(id));
    res.status(sc.OK).json({ status: "success", task: data });
  } catch (error) {
    next(error);
  }
});

// ADD A TASK
router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    setModel([...model, { id: 3, ...body }]);
    res.status(sc.CREATED).json({ status: "success" });
  } catch (error) {
    next(error);
  }
});

// UPDATE TASK
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedModel = model.map((task) => {
      if (task.id !== parseInt(id)) return task;
      return { id: parseInt(id), ...body };
    });
    setModel(updatedModel);
    res.status(sc.OK).json({ status: "success" });
  } catch (error) {
    next(error);
  }
});

// DELETE TASK
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedModel = model.filter((task) => task.id !== parseInt(id));
    setModel(updatedModel);
    res.status(sc.OK).json({ status: "success" });
  } catch (error) {
    next(error);
  }
});

export default router;
