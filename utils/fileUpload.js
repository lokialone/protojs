export function sendFile(file, url) {
    var uri = url;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    
    xhr.open("POST", uri, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText); // handle response.
        }
    };
    fd.append(file.name, file.file);
    // Initiate a multipart/form-data upload
    xhr.send(fd);
}
// 
export function fileUpload(type) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
    input.click();
    function handleFiles() {
        if (!input.files.length) return;
        let file = input.files[0];
        console.log(file);
        // sendFile({name: 'ddd', file}, 'http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php');
    }
    input.addEventListener('change', handleFiles, false);     
}
// test code
function uploadImage() {
    var input = document.createElement('input');
    input.type = 'file';
    input.click(); 
    function handleFiles() {
        console.log(input.files);
        if (!input.files.length) return;
        let file = input.files[0];
        var img = document.createElement("img");
        img.src = window.URL.createObjectURL(file);
        preview.appendChild(img);
        img.onload = function() {
            window.URL.revokeObjectURL(img.src);
        }
        // var reader = new FileReader();
        // reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        // reader.readAsDataURL(file);  
    }

    input.addEventListener('change', handleFiles, false);  
}

var preview = '';
window.onload = function() {
    // test code
    preview = document.getElementById('preview');
    preview.onclick = () => {
        fileUpload();
    } 
}
