const admin = require('firebase-admin')
const serviceAccount = require("../serviceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}