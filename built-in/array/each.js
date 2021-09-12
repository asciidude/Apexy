export default function(arr, callback) {
    for(let i in arr) {
        callback(i);
    }
}