@if(isset($isAppend) && $isAppend)
	<ul class="todo-list" data-widget="todo-list">
		@foreach($endows as $key => $endow)
			@php
				$images = $endow->images ?? asset('assets/admin/dist/img/no_image.png');
			@endphp

			<li class="ul-item {{$endow->id}}">
                <span class="handle">
                  	<i class="fas fa-ellipsis-v"></i>
                  	<i class="fas fa-ellipsis-v"></i>
                </span>
                <div  class="icheck-primary d-inline ml-2">
                  	<input type="checkbox" value="{{$endow->id}}" name="applies_value[{{$endow->id}}]['id']" id="todoCheck-endow-{{ $key }}">
                  	<label for="todoCheck-endow-{{ $key }}"></label>
                </div>
                <img src="{{ $images }}" width="40px" height="40px">
                <span class="text">{{ $endow->name }}</span>
          	</li>

		@endforeach
	</ul>
@else
	<div class="modal fade" id="modal-lg-endow">
	  	<div class="modal-dialog modal-lg">
		    <div class="modal-content">
		      	<div class="modal-header">
			        <h4 class="modal-title">Large Modal</h4>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          	<span aria-hidden="true">&times;</span>
			        </button>
		      	</div>
		      	<div class="modal-body">
		        	<form action="" id="formAddItem" method="post">
						<div class="input-group block-search-appliesto inEndow">
		                  	<input type="text" class="form-control">
		                  	<span class="input-group-append">
		                    	<button type="button" class="btn btn-info btn-flat endow_search" search="inEndow" is-append="1">Tìm Kiếm</button>
		                  	</span>
		                </div>

		                <div class="block-endow-list">
							<ul class="todo-list" data-widget="todo-list">
								@foreach($endows as $key => $endow)
									@php
										$images = $endow->images ?? asset('assets/admin/dist/img/no_image.png');
									@endphp

									<li class="ul-item {{$endow->id}}">
					                    <span class="handle">
					                      	<i class="fas fa-ellipsis-v"></i>
					                      	<i class="fas fa-ellipsis-v"></i>
					                    </span>
					                    <div  class="icheck-primary d-inline ml-2">
					                      	<input type="checkbox" value="{{$endow->id}}" name="applies_value[{{$endow->id}}]['id']" id="todoCheck-endow-{{ $key }}">
					                      	<label for="todoCheck-endow-{{ $key }}"></label>
					                    </div>
					                    <img src="{{ $images }}" width="40px" height="40px">
					                    <span class="text">{{ $endow->name }}</span>
					              	</li>

								@endforeach
							</ul>
		                </div>
		        	</form>
		      	</div>
		      	<div class="modal-footer justify-content-between">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
			        <button type="button" class="btn btn-primary addappliesto {{ @$type_search }}">Lưu</button>
		      	</div>
		    </div>
		    <!-- /.modal-content -->
	  	</div>
	  	<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->

	<script>
	  	$('#formAddItem input').on('keypress', function(e) {
	    	var keyCode = e.keyCode || e.which;
	    	if (keyCode === 13) {
		      	e.preventDefault();
		      	return false;
	    	}
	  	});
	</script>
@endif
