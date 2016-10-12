/**
 * Created by iform on 2016-09-27.
 */
var _menus = {"menus":[
    {"menuid":"1","icon":"icon-sys","menuname":"企业管理",
        "menus":[{"menuname":"未认证","icon":"icon-nav","url":"User/UserCer.html"},
            {"menuname":"待认证","icon":"icon-save","url":"User/UserWait.html"},
            {"menuname":"已认证","icon":"icon-users","url":"User/UserCerP.html"}
        ]
    },{"menuid":"2","icon":"icon-sys","menuname":"会员管理",
        "menus":[{"menuname":"非会员企业","icon":"icon-nav","url":"members/membersfa.html"},
            {"menuname":"企业会员","icon":"icon-nav","url":"members/membersno.html"},
            {"menuname":"过期会员","icon":"icon-nav","url":"members/membersex.html"}
        ]
    },{"menuid":"3","icon":"icon-sys","menuname":"综合招标管理",
        "menus":[{"menuname":"综-待审核","icon":"icon-nav","url":"BidsZ/multipleAu.html"},
            {"menuname":"综-待报名","icon":"icon-nav","url":"BidsZ/multiplePn.html"},
            {"menuname":"综-投标书","icon":"icon-nav","url":"BidsZ/multipleQt.html"},
            {"menuname":"综-待报价","icon":"icon-nav","url":"BidsZ/multipleTd.html"},
            {"menuname":"综-待选标","icon":"icon-nav","url":"BidsZ/multipleBs.html"},
            {"menuname":"综-已流标","icon":"icon-nav","url":"BidsZ/multipleFl.html"},
            {"menuname":"综-已废标","icon":"icon-nav","url":"BidsZ/multipleVd.html"}
        ]
    },{"menuid":"4","icon":"icon-sys","menuname":"竞价招标管理",
        "menus":[{"menuname":"竞-待审核","icon":"icon-nav","url":"BidsJ/quotesAu.html"},
            {"menuname":"竞-待报名","icon":"icon-nav","url":"BidsJ/quotesPn.html"},
            {"menuname":"竞-待报价","icon":"icon-nav","url":"BidsJ/quotesTd.html"},
            {"menuname":"竞-待选标","icon":"icon-nav","url":"BidsJ/quotesBs.html"},
            {"menuname":"竞-已流标","icon":"icon-nav","url":"BidsJ/quotesFl.html"},
            {"menuname":"竞-已废标","icon":"icon-nav","url":"BidsJ/quotesVd.html"}
        ]
    },{"menuid":"5","icon":"icon-sys","menuname":"履约管理",
        "menus":[{"menuname":"待签约","icon":"icon-nav","url":"Performance/perwait.html"},
            {"menuname":"履约中","icon":"icon-nav","url":"Performance/perIIT.html"},
            {"menuname":"已完成","icon":"icon-nav","url":"Performance/perfinist.html"}
        ]
    },{"menuid":"6","icon":"icon-sys","menuname":"履约争议",
        "menus":[{"menuname":"待审核争议","icon":"icon-nav","url":"Controversy/oversywait.html"},
            {"menuname":"待确认争议","icon":"icon-nav","url":"Controversy/oversyfir.html"},
            {"menuname":"历史争议","icon":"icon-nav","url":"Controversy/oversyhis.html"}
        ]
    },{"menuid":"7","icon":"icon-sys","menuname":"保证金管理",
        "menus":[{"menuname":"报名阶段","icon":"icon-nav","url":"Security/secureg.html"},
            {"menuname":"交标书阶段","icon":"icon-nav","url":"Security/secuten.html"},
            {"menuname":"报价阶段","icon":"icon-nav","url":"Security/secuqu.html"},
            {"menuname":"履约阶段","icon":"icon-nav","url":"Security/secuper.html"},
            {"menuname":"正常退回","icon":"icon-nav","url":"Security/secupurse.html"},
        //    撤标、未报价、流标、废标、未中标
            {"menuname":"争议退回","icon":"icon-nav","url":"Security/secucon.html"}
        //    由管理人员审核、系统自动或招标双方确认退回
        ]
    },{"menuid":"8","icon":"icon-sys","menuname":"充值提现管理",
        "menus":[{"menuname":"充值记录","icon":"icon-nav","url":"Funds/fundsde.html"},
            {"menuname":"安全监控","icon":"icon-nav","url":"Funds/fundssa.html"},
            {"menuname":"提现申请/审核","icon":"icon-nav","url":"Funds/fundsau.html"},
            {"menuname":"待确认提现","icon":"icon-nav","url":"Funds/fundswa.html"},
            {"menuname":"已确认提现","icon":"icon-nav","url":"Funds/fundsco.html"}
        ]
    },{"menuid":"39","icon":"icon-sys","menuname":"票具管理",
        /*
        *开票信息审核：放企业的开票信息申请，只能选一种增值税普通发票，增值税专用发票；
        *企业开票信息：就是所有已经审核通过这些开票信息；
        *企业开票申请：这里放企业申请的这些开票信息，由会计进行发票打印、然后填写相应的发票邮寄的快递单号；
        *历史开票信息：邮寄出去的发票的历史信息就显示在这里，然后可以查询发票邮寄的结果。*/
        "menus":[{"menuname":"开票信息审核","icon":"icon-nav","url":"Tickets/ticketsAud.html"},
            {"menuname":"企业开票信息","icon":"icon-nav","url":"Tickets/ticketsBas.html"},
            {"menuname":"企业开票申请","icon":"icon-nav","url":"Tickets/ticketsAPP.html"},
            {"menuname":"历史开票信息","icon":"icon-nav","url":"Tickets/ticketsHis.html"}
        ]
    },{"menuid":"39","icon":"icon-sys","menuname":"广告通知",
        "menus":[{"menuname":"大广告","icon":"icon-nav","url":"/shop/productcatagory.aspx"},
            {"menuname":"小广告","icon":"icon-nav","url":"/shop/product.aspx"},
            //通知公告分为：重要、普通、通告
            {"menuname":"通知公告","icon":"icon-nav","url":"/shop/product.aspx"},
            {"menuname":"招标规则|法规","icon":"icon-nav","url":"/shop/product.aspx"}
        ]
    },{"menuid":"39","icon":"icon-sys","menuname":"人员管理",
        "menus":[{"menuname":"账号管理","icon":"icon-nav","url":"/shop/productcatagory.aspx"},
            {"menuname":"角色管理","icon":"icon-nav","url":"/shop/product.aspx"}
        ]
    },{"menuid":"39","icon":"icon-sys","menuname":"系统管理",
        "menus":[{"menuname":"参数管理","icon":"icon-nav","url":"/shop/productcatagory.aspx"},
            {"menuname":"其他","icon":"icon-nav","url":"/shop/product.aspx"}
        ]
    },{"menuid":"39","icon":"icon-sys","menuname":"详细页",
        "menus":[{"menuname":"招标详细页","icon":"icon-nav","url":"Details/detailsbids.html"},
            {"menuname":"履约详细页","icon":"icon-nav","url":"Details/performance.html"},
            {"menuname":"企业详细页","icon":"icon-nav","url":"Details/BusinessDet.html"},
            {"menuname":"打款确认页","icon":"icon-nav","url":"Details/playConfirm.html"},
            {"menuname":"发票详细页","icon":"icon-nav","url":"Details/invoicedetail.html"}
        ]
    }
]};
//设置登录窗口
function openPwd() {
    $('#w').window({
        title: '修改密码',
        width: 300,
        modal: true,
        shadow: true,
        closed: true,
        height: 160,
        resizable:false
    });
}
//关闭登录窗口
function close() {
    $('#w').window('close');
}


//修改密码
function serverLogin() {
    var $newpass = $('#txtNewPass');
    var $rePass = $('#txtRePass');

    if ($newpass.val() == '') {
        msgShow('系统提示', '请输入密码！', 'warning');
        return false;
    }
    if ($rePass.val() == '') {
        msgShow('系统提示', '请在一次输入密码！', 'warning');
        return false;
    }

    if ($newpass.val() != $rePass.val()) {
        msgShow('系统提示', '两次密码不一至！请重新输入', 'warning');
        return false;
    }

    $.post('/ajax/editpassword.ashx?newpass=' + $newpass.val(), function(msg) {
        msgShow('系统提示', '恭喜，密码修改成功！<br>您的新密码为：' + msg, 'info');
        $newpass.val('');
        $rePass.val('');
        close();
    })

}

$(function() {

    openPwd();
    //
    $('#editpass').click(function() {
        $('#w').window('open');
    });

    $('#btnEp').click(function() {
        serverLogin();
    })



    $('#loginOut').click(function() {
        $.messager.confirm('系统提示', '您确定要退出本次登录吗?', function(r) {

            if (r) {
                location.href = '/ajax/loginout.ashx';
            }
        });

    })



});
