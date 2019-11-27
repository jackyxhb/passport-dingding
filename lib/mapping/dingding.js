var logger = require('../utils/logging')

module.exports = profile => {
    logger.log2('debug', 'profile=\n' + JSON.stringify(profile))
    return {
        uid: profile.username || profile.openid,
        mail: profile.email,
        cn: profile.nick,
        nickname: profile.nick,
        employeeNumber: profile.unionid,
        transientId: profile.dingId
    }
}
