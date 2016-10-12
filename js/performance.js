/**履约管理
 * Created by iform on 2016-09-27.
 */
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    $('#perW').datagrid({
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
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 120, align: 'right'},
            {field: 'listprice', title: '招标方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '发标公司', width: 180, align: 'right'},
            {field: 'attr1', title: '中标公司', width: 180},
            {field: 'attr1', title: '中标时间', width: 100},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
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
    $('#perI').datagrid({
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
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 120, align: 'right'},
            {field: 'listprice', title: '招标方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '发标公司', width: 180, align: 'right'},
            {field: 'attr1', title: '中标公司', width: 180},
            {field: 'attr1', title: '中标时间', width: 100},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
            {field: 'statusNun', title: '签约时间', width: 120, align: 'center'}
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
    $('#perF').datagrid({
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
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 120, align: 'right'},
            {field: 'listprice', title: '招标方式', width: 180, align: 'right'},
            {field: 'unitcost', title: '发标公司', width: 180, align: 'right'},
            {field: 'attr1', title: '中标公司', width: 180},
            {field: 'attr1', title: '中标时间', width: 100},
            {field: 'status', title: '联系人', width: 120, align: 'center'},
            {field: 'statusNun', title: '联系电话', width: 120, align: 'center'},
            {field: 'statusNun', title: '签约时间', width: 120, align: 'center'},
            {field: 'statusNun', title: '验收时间', width: 120, align: 'center'}
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