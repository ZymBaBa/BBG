/**
 * 保证金管理
 * Created by iform on 2016-09-30.
 */
$(function () {
    $('#pp').pagination({
        total: 2000,
        pageSize: 10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse', 'west');
    //报名保证金
    $('#secuW').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'attr1', title: '单位金额', width: 100},
            {field: 'listprice', title: '报名数', width: 100, align: 'right'},
            {field: 'attr1', title: '总额', width:200}
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
    //交标书阶段
    $('#secuT').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'attr1', title: '单位金额', width: 100},
            {field: 'listprice', title: '报名数', width: 100, align: 'right'},
            {field: 'listprice', title: '交标数', width: 100, align: 'right'},
            {field: 'attr1', title: '总额', width: 200}
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
    //报价阶段
    $('#secuQ').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'attr1', title: '单位金额', width: 100},
            {field: 'listprice', title: '报名数', width: 100, align: 'right'},
            {field: 'listprice', title: '交标数', width: 100, align: 'right'},
            {field: 'attr1', title: '总额', width: 200}
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
    //履约阶段
    $('#secuP').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '中标公司', width: 120, align: 'right'},
            {field: 'attr1', title: '保证金', width: 200}
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
    //正常退回保证金：撤标、未报价、流标、废标、未中标、强制废标
    $('#secuPu').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '投标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '退回原因', width: 120, align: 'right'},
            //    撤标、未报价、流标（竞价是报名，综合是报名、交标书）、废标、未中标
            {field: 'attr1', title: '退回金额', width: 200}
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
    //争议退回保证金
    $('#secuC').datagrid({
        width: 1600,
        height: 680,
        remoteSort: false,
        singleSelect: true,
        nowrap: false,
        fitColumns: true,
        url: 'json/datagrid_data.json',
        columns: [[
            {field: 'itemid', title: '序号', width: 80},
            {field: 'productid', title: '操作', width: 120},
            //操作查看详情
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '招标ID', width: 120, align: 'right'},
            {field: 'listprice', title: '招标名称', width: 200, align: 'right'},
            {field: 'listprice', title: '招标公司', width: 200, align: 'right'},
            {field: 'listprice', title: '中标公司', width: 120, align: 'right'},
            {field: 'listprice', title: '保证总金额', width: 120, align: 'right'},
            {field: 'attr1', title: '招标方保证金', width: 150},
            {field: 'attr1', title: '投标方保证金', width: 150}
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
    })
})