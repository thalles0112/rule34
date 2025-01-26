import * as jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SCRET || ''

// Gerar token
export function generateToken(payload: object, expiresIn = '15m') {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verificar token
export function verifyToken(token: string) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}
