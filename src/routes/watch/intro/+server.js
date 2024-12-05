export async function GET({ params }) {
    const file = await fetch("http://localhost:80/static/ny-extract.mov")
    return file
}