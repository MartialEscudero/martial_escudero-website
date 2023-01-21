export function useGetAge() {
    const dtn = "21/07/2000"

    let today = new Date()
    let year = dtn.substr(6, 4)
    let month = dtn.substr(3, 2)
    let day = dtn.substr(0, 2)
    let birthday = new Date(year + "-" + month + "-" + day)
    let age = today.getFullYear() - birthday.getFullYear()
    let m = today.getMonth() - birthday.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age = age - 1
    }

    return Math.abs(age)
}