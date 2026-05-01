---
title: MeshCore vs Meshtastic: Why I Am Staying with Meshtastic
date: 2026-03-28
excerpt: My experience comparing MeshCore and Meshtastic in real-world city use, home setup, and emergency-style communication scenarios.
image: assets/mcvsmt.png
---

Over the last few months, I have been playing with two popular LoRa-based decentralized communication systems: Meshtastic and MeshCore.

I carried a node around the city. I tested both indoors and outdoors. I built a proper home setup with a large antenna on my balcony. I joined both communities for a while, mostly to understand what I would actually use in real life.

My goal was simple: find a practical way to communicate with a few geek friends, and maybe have a usable backup messaging system for emergencies.

After testing both, I am staying with Meshtastic.

## Meshtastic worked better than I first realized

I started with Meshtastic.

Technically, it worked great. My messages were going through from almost everywhere: my apartment, the elevator, outside, around the city, and even in places where I did not expect much signal.

At first, I underappreciated this.

The problem was not the technology. The problem was that the public channels were quiet. Nobody was really talking. When you first join a mesh network, you naturally want to chat with people already there. If nobody replies, it feels like the network is dead.

So I started wondering if MeshCore would be better.

## MeshCore felt alive immediately

When I tried MeshCore in the Netherlands, the difference was obvious.

The community was much more active. I went to my balcony and immediately started receiving messages. People were talking. Things were happening. It felt alive in a way Meshtastic did not.

At first, I was genuinely excited. I thought I had found the better network.

That excitement lasted until I started testing it in normal real-life conditions.

## The problem with MeshCore is infrastructure

The biggest practical difference is this:

With Meshtastic, every node can help repeat messages.

With MeshCore, you depend much more on dedicated infrastructure.

That may sound fine in theory. In practice, it changes everything.

Infrastructure has to be built and maintained by people. Usually these are enthusiasts, not professional telecom operators. Even in the Netherlands, where the MeshCore community is relatively large, the infrastructure was not reliable enough for normal use.

At home, with a large antenna on the balcony, MeshCore worked. Near a repeater, it could also work.

But walking around the city with a small companion node was a completely different story.

If the node was in my backpack or pocket, most messages failed. If I wanted a better chance, I had to hold the device up in the air like some suspicious radio goblin. That is funny once. It is not a practical communication system.

In real life, nine out of ten messages often failed. I could receive some traffic, but transmitting was unreliable.

That is not good enough.

## Meshtastic just worked

Meshtastic was much less dramatic.

I flashed the device, configured it, and used it. That was mostly it.

I could carry the node around. I could keep it indoors. I could be in the elevator, in my apartment, outside, on the street, or on the balcony. Messages still had a good chance of going through.

There was no special repeater dependency. No need to be near someone else’s infrastructure. No need to participate in local coordination politics just to make the system usable.

The device was part of the mesh. That is the whole point.

## Infrastructure creates power

This is where MeshCore started to bother me beyond the technical problems.

When a network depends on infrastructure, the people who run that infrastructure get power.

They decide what is acceptable. They influence configuration choices. They argue about spreading factors, coding rates, bandwidth, channels, regional settings, and collision problems. Some of that is technically necessary, of course. Radio is shared space. There are real constraints.

But it also creates a social structure around the network.

Suddenly, decentralized communication starts depending on a small group of opinionated people who maintain repeaters and define how things should work in a region.

That is not what I want from this kind of system.

I do not want to join a political community just to send a message. I do not want to depend on someone else keeping their repeater online. I do not want my ability to communicate to be shaped by local community decisions unless absolutely necessary.

With Meshtastic, the model feels closer to what I actually want: independent nodes, simple participation, and no central infrastructure layer that becomes socially or technically powerful.

## MeshCore may scale better, but that is not enough for me

To be fair, MeshCore’s approach is not stupid.

There are real reasons to separate infrastructure from client devices. It can help with routing, control, and maybe scalability. In dense areas, Meshtastic can have issues with collisions and congestion. I understand why some people prefer a more structured network.

But for my use case, that tradeoff is not worth it.

A theoretically better network is not useful if my pocket node cannot reliably send messages while I am walking around the city.

A more organized community is not useful if using the network means depending on infrastructure I do not control.

A busier public channel is not useful if the underlying system feels less practical as a personal communication tool.

## My conclusion

MeshCore felt more alive.

Meshtastic felt more usable.

And for me, usability wins.

If I want to communicate with friends, or have a backup way to send messages in an emergency, I want something that works with the device I am carrying. I do not want to rely on a repeater being nearby. I do not want to hold an antenna above my head. I do not want to care about local infrastructure politics.

Meshtastic is not perfect. It can be quiet. It may run into scalability problems. Public channels are often boring unless enough people nearby actually use them.

But the basic model is right.

You turn on a node, and it becomes part of the network.

That is what decentralized communication should feel like.