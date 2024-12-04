export async function GET({ params }) {
    const file = await fetch("http://localhost:8080/static/ny-extract.mov")
    return file
}