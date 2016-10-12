/**履约管理
 * Created by iform on 2016-09-27.
 */
//搜索

//分页
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    //非会员企业
    $('#membf').datagrid({
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
            {field: 'listprice', title: '注册账号', width: 100, align: 'right'},
            {field: 'listprice', title: '注册时间', width: 120, align: 'right'},
            {field: 'listprice', title: '招标编号', width: 80, align: 'right'},
            {field: 'listprice', title: '企业名称', width: 180, align: 'right'},
            {field: 'unitcost', title: '认证时间', width: 120, align: 'right'},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
            {field: 'listprice', title: '省', width: 80, align: 'right'},
            {field: 'listprice', title: '市', width: 80, align: 'right'},
            {field: 'statusNun', title: '发标数', width: 120, align: 'center'}
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
    //会员企业
    $('#membn').datagrid({
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
            {field: 'listprice', title: '注册账号', width: 100, align: 'right'},
            {field: 'listprice', title: '注册时间', width: 120, align: 'right'},
            {field: 'listprice', title: '招标编号', width: 80, align: 'right'},
            {field: 'listprice', title: '企业名称', width: 180, align: 'right'},
            {field: 'unitcost', title: '认证时间', width: 120, align: 'right'},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
            {field: 'listprice', title: '省', width: 80, align: 'right'},
            {field: 'listprice', title: '市', width: 80, align: 'right'},
            {field: 'statusNun', title: '发标数', width: 100, align: 'center'},
            {field: 'statusNun', title: '投标数', width: 100, align: 'center'},
            //以报名为准
            {field: 'statusNun', title: '到期时间', width: 120, align: 'center'}
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
    //过期会员
    $('#membs').datagrid({
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
            //操作只能查看详情，详细内容
            {field: 'listprice', title: '注册账号', width: 100, align: 'right'},
            {field: 'listprice', title: '注册时间', width: 120, align: 'right'},
            {field: 'listprice', title: '招标编号', width: 80, align: 'right'},
            {field: 'listprice', title: '企业名称', width: 180, align: 'right'},
            {field: 'unitcost', title: '认证时间', width: 120, align: 'right'},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
            {field: 'listprice', title: '省', width: 80, align: 'right'},
            {field: 'listprice', title: '市', width: 80, align: 'right'},
            {field: 'statusNun', title: '发标数', width: 100, align: 'center'},
            {field: 'statusNun', title: '投标数', width: 100, align: 'center'},
            //以报名为准
            {field: 'statusNun', title: '到期时间', width: 120, align: 'center'}
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
//    审核通回弹框

})
