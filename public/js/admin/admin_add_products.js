
let imageFile;
let cropImg;

const fileSelect = $("#productImage");
const fileElem = $("#fileElem");

fileSelect.click(function () {
    fileElem.click();
});

function check_image_type(file) {
    const extension = file.substr((file.lastIndexOf('.') + 1));
    return extension === 'jpg' ||
        extension === 'jpeg' ||
        extension === 'gif' ||
        extension === 'png';
}

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        if (!file.type.startsWith('image/')) {
            continue;
        }

        let img = document.getElementById("productImage");
        img.classList.add("obj");
        img.file = file;
        imageFile = file;

        const reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(file);
    }
    setTimeout(() => {
        const el = document.getElementById('productImage');
        cropImg = new Croppie(
            el,
            {
                viewport: {width: 256, height: 256},
                boundary: {width: 300, height: 300},
                showZoomer: false
            }
        );
    }, 100);
}

function addProduct() {
    cropImg.result('blob').then(function (blob) {
        const formData = new FormData();
        formData.append("name", $('#productName').val());
        formData.append("stock", $('#stock').val());
        formData.append("price", $('#marketPrice').val());
        formData.append("image", blob);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', "/product", true);
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                case 201:
                    resetFields();
                    M.toast({html: 'Product created', classes: 'green'});
                    break;
                case 409:
                    M.toast({html: 'Already exist a product with this name', classes: 'red'});
                    break;
                default:
                    M.toast({html: 'There was a error with your request', classes: 'red'});
                    break;
            }

        };
        xhr.send(formData);
        return false;
    });
}

function resetFields() {
    $('#productName').val("");
    $('#stock').val("");
    $('#marketPrice').val("");
    $('#productImage').attr("src", "/images/default-product-image.jpg");
    cropImg.destroy();
}
