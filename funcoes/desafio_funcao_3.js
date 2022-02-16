function mediaBondosa(n1, n2, n3) {

    if (n1 < n2 && n1 < n3) {
        return (n2 + n3) / 2;
    } else if (n2 < n3) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

console.log(mediaBondosa(7,8, 3.1, 6.7));