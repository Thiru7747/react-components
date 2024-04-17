
export function generateOTP(number){
    const length = number;
    let otp = '';

    for (let i = 0; i < length; i++) {
        const digit = Math.floor(Math.random() * 10);
        otp += digit.toString();
    }

    return otp;
}