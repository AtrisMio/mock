const Packing = require('./../../../utils/packing');

const auth = (type = auth.anonymous) => {
    if (type === auth.anonymous) {
        return async (req, res, next) => {
            await next();
        };
    }
    if (type === auth.user) {
        return async (req, res, next) => {
            if(!req.userInfo) {
                if (/\/api\//.test(req.url)) { // api返回401
                    res.status(401).json(Packing({}, 401, 'Unauthorized', '用户未登录'));
                    return;
                } else { // 页面应当重定向
                    res.redirect('/mock/management/signin');
                }
            }
            await next();
        };
    }
    if (type === auth.admin) {
        return async (req, res, next) => {
            // todo 管理员验证
            await next();
        };
    }
};

auth.anonymous = 'AUTH__anonymous';
auth.user = 'AUTH__user';
auth.admin = 'AUTH__admin';

module.exports = auth;