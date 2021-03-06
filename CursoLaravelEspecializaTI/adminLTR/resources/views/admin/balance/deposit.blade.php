@extends('adminlte::page')

@section('title', 'Nova Recarga')

@section('content_header')
    <h1>Fazer Recarga</h1>

    <ol class="breadcrumb">
        <li><a href="{{ route('admin.home') }}">Dashboard</a></li>
        <li><a href="{{ route('admin.balance') }}">Saldo</a></li>
        <li><a href="{{ route('balance.deposit') }}">Depositar</a></li>
    </ol>
@stop

@section('content')
    <div class="box">

        <div class="box-header">
            <h3>Fazer Recarga</h3>
        </div>

        <div class="box-body">
            @include('admin.includes.alerts')
            
            <form method="post" action="{{ route('deposit.store') }}">
                {!! csrf_field() !!}

                <div class="form-group">
                    <input type="text" name="value" placeholder="Valor recarga" class="form-control" autofocus>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-success">Recarregar</button>
                </div>
            </form>
        </div>

    </div>
@stop