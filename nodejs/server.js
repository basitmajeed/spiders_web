const mongoose = require("mongoose");

// Database Connection
async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/CSE");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error Connecting\n", e);
    }
}

// Student Schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
});
const Student = mongoose.model("students", studentSchema);

// Create user
async function createUser(name, age, rollNo) {
    try {
        const newUser = new Student({ name, age, rollNo });
        await newUser.save();
        console.log("User created successfully");
        console.log(newUser);
    } catch (err) {
        console.error("Error creating user:", err.message);
    }
}

// Find user
async function findUser(rollNo) {
    const user = await Student.findOne({ rollNo });
    if (user) {
        console.log("User Found");
        console.log(user);
    } else {
        console.log("User not found");
    }
}

// Update user
async function updateUser(name, age, rollNo) {
    try {
        const updatedUser = await Student.findOneAndUpdate(
            { rollNo },
            { name, age },
            { new: true } // Return the updated document
        );
        if (updatedUser) {
            console.log("User updated successfully");
            console.log(updatedUser);
        } else {
            console.log("User not found for update");
        }
    } catch (err) {
        console.error("Error updating user:", err.message);
    }
}

// Delete user
async function deleteUser(rollNo) {
    const user = await Student.findOneAndDelete({ rollNo });
    if (user) {
        console.log("User deleted successfully");
        console.log(user);
    } else {
        console.log("User not found");
    }
}

// Run everything
async function main() {
    await connectDB();
    await createUser("Lorem", 18, "CSE-14-15");
    await findUser("CSE-14-15");
    await updateUser("Lorem Ipsum", 19, "CSE-14-15");
    await findUser("CSE-14-15");
    await deleteUser("CSE-14-15");
}

main();
