$(function() {
  $('#loadData').click(function() {
    var url =
      'https://spreadsheets.google.com/feeds/list/1wiq5A0xNJNDkpCtlksCRf6Hs19tWH7HsB1zQ3iQnEc8/od6/public/values?alt=json';
    $.getJSON(url, function(data) {
      console.log(data.feed.entry);
      var html = '';
      $.each(data.feed.entry, function(key, val) {
        console.log(val.gsx$members.$t);
        console.log(val.gsx$_chk2m.$t);

        html += `
        
        <div class="container">
        
        <!--###################START HERE#####################-->

        <!-- TABLE -->
        <table class="table table-striped table-bordered table-hover table-sm">



        <thead class="table-primary">
        <tr>
            <th><font color="#3d3dff "><i>${val.gsx$members.$t}</font></th>
            <th>Total</th>
            <td>${val.gsx$total.$t}</td>
        </tr>
    </thead>

        
            <thead class="table-primary">
                <tr>
                    
                    <th>Year</th>
                    <th>Jan</th>
                    <th>Feb</th>
                    <th>Mar</th>
                    <th>Apr</th>
                    <th>May</th>
                    <th>Jun</th>
                    <th>Jul</th>
                    <th>Aug</th>
                    <th>Sept</th>
                    <th>Oct</th>
                    <th>Nov</th>
                    <th>Dec</th>   
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                <td>${val.gsx$year.$t}</td>
                <td>${val.gsx$_ckd7g.$t}</td>
                <td>${val.gsx$_cokwr.$t}</td>
                <td>${val.gsx$_cpzh4.$t}</td>
                <td>${val.gsx$_cre1l.$t}</td>
                <td>${val.gsx$_chk2m.$t}</td>
                <td>${val.gsx$_ciyn3.$t}</td>
                <td>${val.gsx$_clrrx.$t}</td>
                <td>${val.gsx$_cyevm.$t}</td>
                <td>${val.gsx$sep.$t}</td>
                <td>${val.gsx$oct.$t}</td>
                <td>${val.gsx$nov.$t}</td>
                <td>${val.gsx$dec.$t}</td>
                <td>${val.gsx$total.$t}</td>
                </tr>
                <tr>
                
                <td>${val.gsx$year.$t}</td>
                <td>${val.gsx$_ckd7g.$t}</td>
                <td>${val.gsx$_cokwr.$t}</td>
                <td>${val.gsx$_cpzh4.$t}</td>
                <td>${val.gsx$_cre1l.$t}</td>
                <td>${val.gsx$_chk2m.$t}</td>
                <td>${val.gsx$_ciyn3.$t}</td>
                <td>${val.gsx$_clrrx.$t}</td>
                <td>${val.gsx$_cyevm.$t}</td>
                <td>${val.gsx$sep.$t}</td>
                <td>${val.gsx$oct.$t}</td>
                <td>${val.gsx$nov.$t}</td>
                <td>${val.gsx$dec.$t}</td>
                <td>${val.gsx$total.$t}</td>
                </tr>
                <tr>
                <td>${val.gsx$year.$t}</td>
                <td>${val.gsx$_ckd7g.$t}</td>
                <td>${val.gsx$_cokwr.$t}</td>
                <td>${val.gsx$_cpzh4.$t}</td>
                <td>${val.gsx$_cre1l.$t}</td>
                <td>${val.gsx$_chk2m.$t}</td>
                <td>${val.gsx$_ciyn3.$t}</td>
                <td>${val.gsx$_clrrx.$t}</td>
                <td>${val.gsx$_cyevm.$t}</td>
                <td>${val.gsx$sep.$t}</td>
                <td>${val.gsx$oct.$t}</td>
                <td>${val.gsx$nov.$t}</td>
                <td>${val.gsx$dec.$t}</td>
                <td>${val.gsx$total.$t}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
        `;
      });
      $('#output').html(html);
    });
  });
});
