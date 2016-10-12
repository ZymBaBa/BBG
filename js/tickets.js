/**票具管理
 * Created by iform on 2016-09-27.
 */
//搜索

//分页
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10
    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    //开票信息审核
    $('#tAud').datagrid({
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
            //操作：详细；通过详细页进去进行审核或者退回，退回需要填写原因，所填写的原因要在用户前端展现出来。
            {field: 'listprice', title: '申请账号', width: 100, align: 'right'},
            {field: 'listprice', title: '公司名称', width: 120, align: 'right'},
            {field: 'listprice', title: '联系人', width: 80, align: 'right'},
            {field: 'listprice', title: '联系电话', width: 180, align: 'right'},
            {field: 'unitcost', title: '发票抬头', width: 120, align: 'right'},
            {field: 'unitcost', title: '发票类型', width: 120, align: 'right'}
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
    //企业开票信息
    $('#tBas').datagrid({
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
            //操作只能查看详情
            {field: 'listprice', title: '申请账号', width: 100, align: 'right'},
            {field: 'listprice', title: '公司名称', width: 120, align: 'right'},
            {field: 'listprice', title: '联系人', width: 80, align: 'right'},
            {field: 'listprice', title: '联系电话', width: 180, align: 'right'},
            {field: 'unitcost', title: '发票抬头', width: 120, align: 'right'},
            {field: 'unitcost', title: '发票类型', width: 120, align: 'right'},
            {field: 'unitcost', title: '审核人', width: 120, align: 'right'},
            {field: 'unitcost', title: '审核时间', width: 120, align: 'right'}
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
    //企业开票申请
    $('#tApp').datagrid({
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
            //操作，详细点进去能操作（选择快递公司和填写快递单号）
            {field: 'listprice', title: '申请账号', width: 100, align: 'right'},
            {field: 'listprice', title: '公司名称', width: 120, align: 'right'},
            {field: 'listprice', title: '联系人', width: 80, align: 'right'},
            {field: 'listprice', title: '联系电话', width: 180, align: 'right'},
            {field: 'unitcost', title: '发票抬头', width: 120, align: 'right'},
            {field: 'unitcost', title: '发票类型', width: 120, align: 'right'},
            {field: 'unitcost', title: '开票金额', width: 120, align: 'right'},
            {field: 'unitcost', title: '审核人', width: 120, align: 'right'},
            {field: 'unitcost', title: '审核时间', width: 120, align: 'right'}
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
//历史开票信息
    $('#tHis').datagrid({
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
            //操作，详细点进去能操作（选择快递公司和填写快递单号）
            {field: 'listprice', title: '申请账号', width: 100, align: 'right'},
            {field: 'listprice', title: '公司名称', width: 120, align: 'right'},
            {field: 'listprice', title: '联系人', width: 80, align: 'right'},
            {field: 'listprice', title: '联系电话', width: 180, align: 'right'},
            {field: 'unitcost', title: '发票类型', width: 120, align: 'right'},
            {field: 'unitcost', title: '发票金额', width: 120, align: 'right'},
            //按的是快递信息确认的人员
            {field: 'unitcost', title: '操作人员', width: 120, align: 'right'},
            {field: 'unitcost', title: '操作时间', width: 120, align: 'right'}
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
