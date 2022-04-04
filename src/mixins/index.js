export const mixin = {
    method: {
        //提示信息
        notify(title, type) {
            this.$notify({
                title: title,
                type: type
            })
        }
    }
}