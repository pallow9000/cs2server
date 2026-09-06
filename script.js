function copyIP() {
    const ip = "connect pallow.playit.plus:1031";

    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1800);
    });
}
