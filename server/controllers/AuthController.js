import getPrismaInstance from "../utils/PrismaClient.js"

export const checkUser = async (req, res, next) => {
    try {
        const { email } = req.body
        if(!email) {
            return res.json({ success: false, message: "Email is required" })
        }
        const prisma = getPrismaInstance()
        const user = await prisma.user.findUnique({ where: { email: email } })
        if(!user) {
            return res.json({ success: false, message: "User not found" })
        }
        return res.json({ success: true, message: "User Found", data: user })
    } catch (err) {
        console.log("AuthController.js - 5", err);
        next(err);
    }
}