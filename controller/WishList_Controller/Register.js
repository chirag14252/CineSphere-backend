import bcrypt from "bcrypt";
import userModal from "../../models/UserModel.js";
const Register = (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 10);
    const confirmPassword = req.body.confirmPassword;
    //    if any of the field is empty
    if (!name || !username || !password || !confirmPassword) {
        return res.status(400).json(({
            message: "fill all the fields properly"
        }))
    }
    // if password and confirm password are different
    if (!bcrypt.compareSync(confirmPassword, password)) {
        return res.status(400).json({
            message: "password and confirm password doesn't match"
        })
    }
    userModal.findOne({username:username}).then((data, err) => {
        if (data) {
            return res.status(400).json({
                message: "username is no available"
            })
        }
        else {
            userModal.create({
                name: name,
                username: username,
                password: password
            }).then((data, err) => {
                if (data) {
                    return res.status(201).json({
                        message: "user registered successfully",
                        data:data
                    })
                }
                if (err) {
                    return res.status(500).json({
                        message: "server not working properly"
                    })
                }
            })
        }
    })

}

export default Register;