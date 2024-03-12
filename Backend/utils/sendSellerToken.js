//create token and save it in cookies.
const sendShopToken = (user, statusCode, res) => {
    const token = user.getjwtToken();

    //Option for cookies
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    res.status(statusCode).cookie("seller_token", token, options).json({
        success: true,
        user,
        token,
    });
}