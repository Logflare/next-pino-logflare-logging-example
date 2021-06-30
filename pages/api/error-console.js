export default function handler(req, res) {

    // Lets log an error with console here.

    try {
        throw new Error('Whoops!')
    } catch (e) {
        console.error(e)
    }

    res.status(500).json({ error: 'true' })
}