// Task processing function
exports.handler = async (event) => {
    // Your task processing logic here
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Task processed successfully!" })
    };
};