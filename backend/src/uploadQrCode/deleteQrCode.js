import { unlink } from 'node:fs/promises'

export const deleteQrCode = async (path, wrappedConsole) => {
    try {
        await unlink(path);
        return true
    } catch (error) {
        wrappedConsole.error('Error while deleting the QR Code', error);
        return false
    }
}
