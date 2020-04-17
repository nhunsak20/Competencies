module.exports = {
  get: async (req, res) => {
    const db = req.app.get("db");
    try {
      let data = await db.get();
      data = data[0];

      res.status(200).send(data);
    } catch {
      res.status(400).send("Failed");
    }
  },
  getStudent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    try {
      let data = await db.get_student(id);
      data = data[0];
      return res.status(200).send(data);
    } catch {
      res.sendStatus(404);
    }
  },
  getStudentMajor: async (req, res) => {
    const { first_name } = req.query;
    const db = req.app.get("db");

    try {
      if (first_name) {
        let data = await db.get_major_students(first_name);
        return res.status(200).send(data);
      } else {
        let data = await db.get_students();
        return res.status(200).send(data);
      }
    } catch {
      res.sendStatus(400);
    }
  },
  getTeachers: async (req, res) => {
    const { last_name } = req.query;
    const db = req.app.get("db");

    try {
      if(last_name) {
        let data = await db.get_techer_search(last_name);
        return res.status(200).send(data)
      } else {
        let data = await db.get_teachers();
        return res.status(200).send(data);
      }
    } catch {
      res.sendStatus(404);
    }
  },
  getTeacher: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    try {
      let data = await db.get_teacher(id);
      data = data[0];

      return res.status(200).send(data);
    } catch {
      res.sendStatus(404);
    }
  },
  put: async (req, res) => {
    const db = req.app.get("db");
    const { title, video } = req.body;

    try {
      await db.put([title, video]);
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  },
};
