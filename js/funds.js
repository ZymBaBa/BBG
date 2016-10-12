/**
 * 充值提现管理
 * Created by iform on 2016-09-27.
 */
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    //充值记录
    $('#funde').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120, sortable: true},
            //操作只能查看详情，能够查看这个公司的冲值，提现记录
            {field: 'listprice', title: '公司名称', width: 120, align: 'right'},
            {field: 'listprice', title: '联系人', width: 120, align: 'right'},
            {field: 'listprice', title: '联系方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '冲值时间', width: 180, align: 'right'},
            {field: 'attr1', title: '冲值金额', width: 180},
            {field: 'attr1', title: '余额', width: 100}
        ]],
        view: detailview,
        detailFormatter: function (rowIndex, rowData) {
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //安全监控
    $('#funsa').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 80, sortable: true},
            //操作只能查看详情，现金流，收、支、余，事件
            {field: 'listprice', title: '公司名称', width: 180, align: 'right'},
            {field: 'listprice', title: '联系人', width: 120, align: 'right'},
            {field: 'listprice', title: '联系方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '余额', width: 150, align: 'right'},
            {field: 'attr1', title: '冻结', width: 150},
            //保证金
            {field: 'attr1', title: '总额', width: 150},
            {field: 'attr1', title: '提现次数', width: 130},
            {field: 'attr1', title: '最近提现金额', width: 130},
            {field: 'attr1', title: '最近提现时间', width: 130}
        ]],
        view: detailview,
        detailFormatter: function (rowIndex, rowData) {
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //提现申请/审核
    //每天8：00-10：59开放审核功能
    $('#funau').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 80, sortable: true},
            //操作通过、不通过、详细（企业现金流等其他信息，企业的账号等信息隐藏部分）
            {field: 'listprice', title: '公司名称', width: 180, align: 'right'},
            {field: 'listprice', title: '联系人', width: 120, align: 'right'},
            {field: 'listprice', title: '联系方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '余额', width: 150, align: 'right'},
            {field: 'attr1', title: '冻结', width: 150},
            //保证金
            {field: 'attr1', title: '总额', width: 150},
            {field: 'attr1', title: '提现金额', width: 130},
            {field: 'attr1', title: '申请时间', width: 130},
        ]],
        view: detailview,
        detailFormatter: function (rowIndex, rowData) {
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //提现申请/审核
    //每天11：00-11：30开放导出功能
    //确认随时可以操作、反审核
    $('#funwa').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 80, sortable: true},
            //操作导出、确认（企业现金流等其他信息，企业的账号等信息隐藏部分）,能对单条记录返审核，原路退回至钱包
            {field: 'listprice', title: '审核人员', width: 180, align: 'right'},
            {field: 'listprice', title: '审核数量', width: 120, align: 'right'},
            {field: 'listprice', title: '审核金额', width: 180, align: 'right'},
            {field: 'listprice', title: '审核日期', width: 180, align: 'right'},
            {field: 'listprice', title: '导出人员', width: 180, align: 'right'}
        //    确认审核人员提现审核这个功能模块只能每天一个时间段内可以使用，这样可以规定人员，在规定时间内操作；
        //    确认提现的人员才可以看到实现的银行账号进行打款
        ]],
        view: detailview,
        detailFormatter: function (rowIndex, rowData) {
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //已确认提现
    $('#funco').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 80, sortable: true},
            //操作导出、确认、详细（企业现金流等其他信息，企业的账号等信息隐藏部分）,能对单条记录返审核，原路退回至钱包
            {field: 'listprice', title: '审核人员', width: 180, align: 'right'},
            {field: 'listprice', title: '审核数量', width: 120, align: 'right'},
            {field: 'listprice', title: '审核金额', width: 180, align: 'right'},
            {field: 'listprice', title: '导出人员', width: 180, align: 'right'},
            {field: 'listprice', title: '确认时间', width: 180, align: 'right'}
            //只有导出人员才可以确认自己的导出记录已打款
        ]],
        view: detailview,
        detailFormatter: function (rowIndex, rowData) {
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
})