//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ExerciseGO.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Game
    {
        public int GameID { get; set; }
        public int Point { get; set; }
        public string UserName { get; set; }
        public bool IsSocial { get; set; }
        public int LevelID { get; set; }
        public string AspNetUserID { get; set; }
        public int VideoID { get; set; }
        public int EmojiId { get; set; }
    
        public virtual Emoji Emoji { get; set; }
        public virtual Stage Stage { get; set; }
        public virtual Video Video { get; set; }
    }
}
