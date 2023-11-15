using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("Reviews")]
    public class Review
    {
        public int Id { get; set; }
        public string? Comment { get; set; }
        public int Rating { get; set; }
        public int CampgroundId { get; set; }
        public Campground? Campground { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }
    }
}
