const download = require('download-git-repo')
const ora = require('ora')
const path = require('path')

module.exports = function (url, target) {
    target = path.join(target || '.');
    const spinner = ora('Loading template').start();
    return new Promise((resolve, reject) => {
        download(url,
            target, (err) => {
            if (err) {
                spinner.stop();
                reject(err);
            } else {
            // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
            spinner.stop();
            resolve(target);
            }
        });

    });
}
