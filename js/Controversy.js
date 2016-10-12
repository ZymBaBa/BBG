/**
 * 履约争议
 * Created by iform on 2016-09-30.
 */
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    //待审核争议
    $('#overW').datagrid({
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
            //操作查看详情进行审核，可以在详情页看到。
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '发起方', width: 200, align: 'right'},
            //招标方或投标方
            {field: 'unitcost', title: '联系人', width: 120, align: 'right'},
            {field: 'attr1', title: '次数', width: 100}
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
    //待确认争议
    $('#overF').datagrid({
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
            //操作查看详情进行审核，可以在详情页看到。
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '发起方', width: 200, align: 'right'},
            //招标方或投标方
            {field: 'unitcost', title: '联系人', width: 120, align: 'right'},
            {field: 'attr1', title: '次数', width: 100},
            {field: 'attr1', title: '审核时间', width: 120},
            {field: 'attr1', title: '审核人员', width: 120}
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
    //历史争议
    $('#overH').datagrid({
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
            //操作查看详情进行审核，可以在详情页看到。
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '发起方', width: 200, align: 'right'},
            //招标方或投标方
            {field: 'unitcost', title: '联系人', width: 120, align: 'right'},
            {field: 'attr1', title: '次数', width: 100},
            {field: 'attr1', title: '审核人员', width: 100},
            {field: 'attr1', title: '确认时间', width: 100}
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