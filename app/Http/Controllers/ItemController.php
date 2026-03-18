<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    // public function index()
    // {
    //     $items = Item::latest()->get();

    //     return Inertia::render('Items/Index', [
    //         'items' => $items
    //     ]);
    // }

    public function index()
    {
        // $items = Item::latest()->get();

        $items = Item::where('user_id', auth()->id())->get();

        return Inertia::render('Items/Index', [
            'items' => $items
        ]);
    }

    public function create()
    {
        return Inertia::render('Items/Create');
    }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255'
    //     ]);

    //     Item::create($request->only('name'));

    //     return redirect()->route('items.index');
    // }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        Item::create([
            'name' => $request->name,
            'user_id' => auth()->id()
        ]);

        return redirect()->route('items.index');
    }

    // public function edit(Item $item)
    // {
    //     return Inertia::render('Items/Edit', [
    //         'item' => $item
    //     ]);
    // }

    public function edit(Item $item)
    {
        if ($item->user_id !== auth()->id() && !auth()->user()->hasRole('superadmin')) {
            abort(403);
        }

        return Inertia::render('Items/Edit', [
            'item' => $item
        ]);
    }

    // public function update(Request $request, Item $item)
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255'
    //     ]);

    //     $item->update($request->only('name'));

    //     return redirect()->route('items.index');
    // }

    public function update(Request $request, Item $item)
    {
        if ($item->user_id !== auth()->id() && !auth()->user()->hasRole('superadmin')) {
            abort(403);
        }

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $item->update([
            'name' => $request->name
        ]);

        return redirect()->route('items.index');
    }

    // public function destroy(Item $item)
    // {
    //     $item->delete();

    //     return redirect()->route('items.index');
    // }

    public function destroy(Item $item)
    {
        if ($item->user_id !== auth()->id() && !auth()->user()->hasRole('superadmin')) {
            abort(403);
        }

        $item->delete();

        return redirect()->route('items.index');
    }

}